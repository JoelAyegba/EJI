import codecs

with codecs.open('src/data/mockData.ts', 'r', 'utf-8') as f:
    text = f.read()

text = text.replace('<p className="mb-4">', '<p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700 indent-8">')
text = text.replace('className="my-6 rounded-xl', 'className="my-12 rounded-xl shadow-lg')

with codecs.open('src/data/mockData.ts', 'w', 'utf-8') as f:
    f.write(text)

print("done")
