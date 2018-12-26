import io, csv

def csvToArrayData(csv_file):
	data_set = csv_file.read().decode('utf-8')
	io_string = io.StringIO(data_set, newline=None)
	data =[]
	i = 0
	header = []
	for column in csv.reader(io_string, delimiter=',', quotechar="|"):
		if i == 0:
			header.append(column)
		i = 1
		data.append(column)
	return [data,header]

def getColumn(dataSet, indexCol):
	data = []
	for column in dataSet:
		data.append(column[indexCol])
	return data

def preCleanData(dataSet):
	dataAbs = dataSet.replace('[','')
	dataAbs = dataAbs.replace(']','')
	dataAbs = dataAbs.replace("'",'')
	dataAbs = dataAbs.replace(" ",'')
	dataAbs = dataAbs.split(",")
	dataName = dataAbs[0]
	dataAbs.pop(0)
	returnedData = []
	for data in dataAbs:
		try:
			returnedData.append(int(data))
		except:
			returnedData.append(data)
	return [returnedData, dataName]