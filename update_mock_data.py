import codecs

with codecs.open('extracted_html.txt', 'r', 'utf-8') as f:
    html_content = f.read().replace('`', '\\`')

with codecs.open('src/data/mockData.ts', 'r', 'utf-8') as f:
    ts_content = f.read()

if "contentHTML?: string;" not in ts_content:
    ts_content = ts_content.replace(
        "  category: string;\n}",
        "  category: string;\n  contentHTML?: string;\n}"
    )

if "id: 'news-5'" in ts_content and "contentHTML: `" not in ts_content:
    ts_content = ts_content.replace(
        "category: 'ACJA Oversight'\n  },",
        "category: 'ACJA Oversight',\n    contentHTML: `\n" + html_content + "`\n  },"
    )

with codecs.open('src/data/mockData.ts', 'w', 'utf-8') as f:
    f.write(ts_content)

print("Mock data updated successfully")
