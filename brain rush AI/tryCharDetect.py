import chardet
import os

files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
    rawdata = open(f, "rb").read()
    result = chardet.detect(rawdata[0:10000])
    charenc = result['encoding']
    print(f, charenc)