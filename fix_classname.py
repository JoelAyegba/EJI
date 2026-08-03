import codecs

with codecs.open('src/data/mockData.ts', 'r', 'utf-8') as f:
    text = f.read()

# Find the contentHTML blocks and replace className with class ONLY inside them
import re

def fix_content_html(match):
    block = match.group(0)
    block = block.replace('className=', 'class=')
    return block

# Target only the contentHTML template literal blocks
text = re.sub(r'contentHTML: `.*?`', fix_content_html, text, flags=re.DOTALL)

with codecs.open('src/data/mockData.ts', 'w', 'utf-8') as f:
    f.write(text)

print("Fixed className -> class in contentHTML blocks")
