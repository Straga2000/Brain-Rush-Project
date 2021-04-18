import csv
import os
import chardet
import re


def detectEncoding(filename):
    rawdata = open(filename, "rb").read()
    result = chardet.detect(rawdata[0: 100000])
    return result['encoding']


def strip(char, string):
    if char == "":  # not "stripChar"
        regsp = re.compile(r'^\s+|\s+$')
        stripContext = regsp.sub("", string)
        return stripContext
    else:  # some changes are here in this else statement
        stripContext = re.sub(r'^{}+|{}+$'.format(char, char), "", strip("", string))
        return stripContext


def normalizeWord(word):
    if word == "&":
        return "and"

    if word == "%":
        return "percent"

    if word == "+":
        return "plus"

    if word == "$":
        return "dollar"

    return strip('[^A-Za-z]', word).lower()


def tokenize(data):
    delimitators = re.compile('[.?!]')
    nonAlpha = re.compile('[^a-z^A-Z]+[a-zA-Z\-]*[^a-z^A-Z]*')

    data = re.split(delimitators, data)

    newData = []
    for sentence in data:
        newSentence = []
        for word in sentence.split():
            if not re.match(nonAlpha, word):
                # print(sentence)
                word = normalizeWord(word)
                word = word.replace("'", "\'")
                if word:
                    newSentence.append(word)

        if len(newSentence) > 1:
            newData.append(newSentence)

    for i in range(0, len(newData)):
        newData[i] = str(" ".join(newData[i]) + "\n")
    #
    # for line in newData:
    #     if re.match(r'important', line) is not None:
    #         print(line)

    return newData
    # file = ""
    # for line in newData:
    #     file += line

    # with open("learningSample.txt", "w", encoding="utf-8") as fileOut:
    #     print(file)
    #     fileOut.write(file)
    #     fileOut.flush()

    # for line in newData:
    #     print(line)


def cleaningData(data):
    # transform data to string
    data = str(data)

    htmlPattern = re.compile('(<(.*?)>|/\*(.*?)\*/)')
    #TODO work on css extract function(clean shards of css from data aka gif img href)
    cssPattern = re.compile('\{(.*?)\}')
    unrecognizedPattern = re.compile('(&#?[0-9a-z]+;|[0-9]*&#?[0-9a-z]+;)')
    signPattern = re.compile('(\n|\t| - |\.\.\.|_|:|--*-|/|#|\|)')
    serialNumberPattern = re.compile('[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+')
    multipleSpacePattern = re.compile(' +')
    nonWordPattern = re.compile('[a-zA-Z]+[0-9]+[a-zA-Z]+')
    websitePattern = re.compile(' http://www\.[a-zA-z0-9]\.com ')
    numberPattern = re.compile('(# ?[0-9]+\+?|[0-9]+\.[0-9]+"?|[0-9]+/[0-9]+"?|[0-9]+"?)')
    repeatedNumberPattern = re.compile("( ?NUMBER ?)+")
    quotePattern = re.compile('\(|\)')
    breakpointPattern = re.compile('(;|,|\'(s|S))')

    #data = re.sub(unrecognizedPattern, " ", data)
    #data = re.sub(signPattern, " ", data)
    #data = re.sub(multipleSpacePattern, " ", data)
    data = re.sub(htmlPattern, " ", data)
    data = re.sub(cssPattern, "", data)

    replacedData = data.replace("text-align", "")
    if replacedData != data:
         print(data)

    # data = re.sub(websitePattern, " LINK ", data)
    # data = re.sub(quotePattern, " ", data)
    # data = re.sub(serialNumberPattern, " SERIAL ", data)
    # data = re.sub(nonWordPattern, " NONWORD ", data)
    # data = re.sub(numberPattern, " NUMBER ", data)
    # data = re.sub(repeatedNumberPattern, " NUMBER ", data)
    # data = re.sub(signPattern, " ", data)
    # data = re.sub(breakpointPattern, " ", data)

    data = data.replace(" w/ ", "with")
    data = data.replace(" W/ ", "with")
    data = data.replace("Make sure this fits by entering your model number.", " ")
    data = data.replace("Go to Your Orders to start the return Print the return shipping label Ship it! | ", " ")
    data = data.replace("Go to your orders and start the return Select the ship method Ship it! | ", " ")
    data = data.replace("Go to Your Orders to start the return Print the return shipping label Ship it!", " ")
    data = data.replace("Go to your orders and start the return Select the ship method Ship it!", " ")
    data = data.replace("show up to 2 reviews by default ", " ")
    data = data.replace("Seller assumes all responsibility for this listing.", " ")
    data = data.replace(" Seller assumes all responsibility for this listing. ", "")
    data = data.replace("(View shipping rates and policies)", " ")
    data = data.replace(
        "The accuracy and accessibility of the resu ing anslation is not guaranteed. EnglishEnglish Arabic Chinese Simplified Chinese Traditional eskyCzech NederlandsDutch SuomiFinnish Greek Hebrew MagyarHungarian Bahasa IndonesiaIndonesian Japanese Korean NorskNorwegian Portugu sPortuguese Rom n Romanian Russian Sloven inaSlovak Fran aisFrench ItalianoItalian Espa olSpanish SvenskaSwedish Thai T rk eTurkish Ukrainian Ti ng Vi tVietnamese Note The accuracy and accessibility of the resu ing anslation is not guaranteed.", "")
    data = data.replace("''", "")
    data = data.replace('"', "'")

    data = re.sub(multipleSpacePattern, " ", data)

    #if re.match(cssPattern, data) is not None:
    #    print(data)
    return data


def walmart(dict):
    return dict["Description"]


def kaggle(dict):
    return dict["product_description"]


def amazon(dict):
    newList = []
    newList.extend(dict["About Product"])
    newList.extend(dict["Technical Details"])
    # print(newList)
    return newList


def reader(filename, encoding):
    # we need to do some filtering
    # data = []
    # with open(filename, "r", encoding="utf8") as f:
    #    data = f.read()

    # data = data.encode("ascii", errors="ignore").decode()
    # print(data)
    newFile = {}

    if filename.find(".csv") != -1:
        with open(filename, 'r', encoding=encoding, errors="surrogateescape") as csvfile:
            read = csv.reader(csvfile, quoting=csv.QUOTE_ALL)

            counter = 0
            header = []
            for line in read:
                if counter == 0:
                    header = line
                    break
            # print(header)

            for elem in header:
                newFile[elem] = []

            for line in read:
                if line != header:
                    for i in range(0, len(header)):
                        if line[i] is not "":
                            newFile[header[i]].append(line[i])

            # print(newFile["Product description"])
            # now we have just important data
            # for key in newFile:
            #     if newFile[key]:
            #         print(key, "|", newFile[key][5])
            # print("")
            return newFile


# print(os.getcwd())

outputFile = "learningSample.txt"
with open(outputFile, "w") as file:

    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    for f in files:

        prop = []
        dict = None
        if f.find("__init__") == -1 or f.find(outputFile) == -1:
            dict = reader(f, detectEncoding(f))
        if f.find("walmart") != -1:
            prop = walmart(dict)
        if f.find("kaggle") != -1:
            prop = kaggle(dict)
        if (f.find("amazon")) != -1:
            prop = amazon(dict)

        if prop:
            #count = 0
            for elem in prop:
                #if count % 20 == 0:
                    cleanedResult = cleaningData(elem.encode('ascii', 'xmlcharrefreplace').decode('ascii'))
                    normalizedResult = tokenize(cleanedResult)
                    file.writelines(normalizedResult)
                #    count += 1
            # print(f, prop[0])
