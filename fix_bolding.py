import codecs

with codecs.open('src/data/mockData.ts', 'r', 'utf-8') as f:
    text = f.read()

# Remove Publish (Joel)
text = text.replace('<p className="mb-4">Publish (Joel)</p>\n', '')
text = text.replace('<p className="mb-4">Publish (Joel)</p>', '')

# Enhance h4 headings perfectly
text = text.replace(
    'font-serif text-xl font-bold text-slate-800 mt-6 mb-2', 
    'font-sans text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4'
)

# Convert the missed heading
text = text.replace(
    '<p className="mb-4"><strong>July: Migrant Holding Centre (NIS) Abuja, National Agency for the Prohibition of Trafficking in Persons (NAPTIP) Headquarters Abuja and  Nigeria Security and Civil Defence Corps (NSCDC) FCT Command</strong></p>',
    '<h4 className="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4"><strong>July: Migrant Holding Centre (NIS) Abuja, National Agency for the Prohibition of Trafficking in Persons (NAPTIP) Headquarters Abuja and  Nigeria Security and Civil Defence Corps (NSCDC) FCT Command</strong></h4>'
)

# Make strong explicitly overriding font-light
text = text.replace('<strong>', '<strong className="font-bold text-slate-900">')

with codecs.open('src/data/mockData.ts', 'w', 'utf-8') as f:
    f.write(text)

print("Updated mockData.ts successfully.")
