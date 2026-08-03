import codecs

with codecs.open('src/data/mockData.ts', 'r', 'utf-8') as f:
    text = f.read()

old_class = 'font-sans text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4'
new_class = 'font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4'

text = text.replace(old_class, new_class)

with codecs.open('src/data/mockData.ts', 'w', 'utf-8') as f:
    f.write(text)

print("done")
