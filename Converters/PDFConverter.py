"""
Just a python file to convert docx files to pdf files so I can put it on my website to download
"""


from docx2pdf import convert
convert("Files/IsaacWattsResume.docx", "Files/IsaacResume.pdf")
