import xml.etree.ElementTree as ET
import zipfile
import sys
import os
import shutil

docx_path = "/Users/Joel/Downloads/Monitoring Detention, Advancing Justice_ June–July 2026 Field Report.docx"
public_images_dir = "/Users/Joel/Desktop/Equal Justice/public/images/field-report"

if not os.path.exists(public_images_dir):
    os.makedirs(public_images_dir)

try:
    with zipfile.ZipFile(docx_path) as docx:
        # Extract images
        for item in docx.namelist():
            if item.startswith("word/media/"):
                source = docx.open(item)
                filename = os.path.basename(item)
                with open(os.path.join(public_images_dir, filename), "wb") as target:
                    shutil.copyfileobj(source, target)
        
        xml_content = docx.read("word/document.xml")
        rels_content = docx.read("word/_rels/document.xml.rels")
        
        # Parse rels
        rels_tree = ET.fromstring(rels_content)
        namespaces = {
            "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
            "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
            "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            "rels": "http://schemas.openxmlformats.org/package/2006/relationships"
        }
        
        image_map = {}
        for rel in rels_tree.findall(".//rels:Relationship", namespaces):
            if rel.attrib.get("Type", "").endswith("image"):
                image_map[rel.attrib["Id"]] = os.path.basename(rel.attrib["Target"])

        tree = ET.fromstring(xml_content)
        body = tree.find("w:body", namespaces)
        
        html_out = ""
        
        for element in body:
            if element.tag == f'{{{namespaces["w"]}}}p':
                # Check for drawing first in this p
                drawings = element.findall(".//w:drawing", namespaces)
                for drawing in drawings:
                    blip = drawing.find(".//a:blip", namespaces)
                    if blip is not None:
                        rId = blip.attrib.get(f'{{{namespaces["r"]}}}embed')
                        if rId and rId in image_map:
                            img_filename = image_map[rId]
                            html_out += f'<img src="/images/field-report/{img_filename}" alt="Report Image" className="my-6 rounded-xl w-full object-cover" />\n'
                
                # Check for text in this p
                texts_runs = element.findall(".//w:r", namespaces)
                p_text_html = ""
                for run in texts_runs:
                    text_node = run.find("w:t", namespaces)
                    if text_node is not None and text_node.text:
                        # Check bold
                        is_bold = run.find(".//w:b", namespaces) is not None
                        content = text_node.text
                        if is_bold:
                            p_text_html += f"<strong>{content}</strong>"
                        else:
                            p_text_html += content
                
                if p_text_html.strip():
                    # Very primitive subheading detection: if it's entirely strong or short
                    if p_text_html.startswith("<strong>") and p_text_html.endswith("</strong>") and len(p_text_html) < 200:
                         html_out += f'<h4 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-2">{p_text_html}</h4>\n'
                    else:
                         html_out += f'<p className="mb-4">{p_text_html}</p>\n'
                
        with open("extracted_html.txt", "w") as f:
            f.write(html_out)
        print("Success! Created extracted_html.txt")
except Exception as e:
    print(f"Error: {e}")
