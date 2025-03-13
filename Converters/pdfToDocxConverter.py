from pdf2docx import Converter

pdf_file =  'Files/IsaacResume.pdf'
docx_file = 'Files/IsaacResume.docx'

# convert pdf to docx
cv = Converter(pdf_file)
cv.convert(docx_file)      # all pages by default
cv.close()