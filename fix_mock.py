import re

with open('src/data/mockData.ts', 'r') as f:
    ts_content = f.read()

ts_content = re.sub(
    r"(id: 'news-2'.*?category: 'ACJA Oversight'),\n    contentHTML: `.*?`\n  },",
    r"\1\n  },",
    ts_content,
    flags=re.DOTALL
)

with open('src/data/mockData.ts', 'w') as f:
    f.write(ts_content)
print("Fixed news-2")
