export default function csvJSON (csvStr) {
  let obj = {}
  const headerCSV = ['file', 'text', 'number', 'hex']
  const rowsData = csvStr.split('\n')

  if (rowsData.length > 1) {
    const headers = rowsData[0].split(',')
    if (JSON.stringify(headerCSV) === JSON.stringify(headers)) {
      const lines = []
      let file
      for (let i = 1; i < rowsData.length; i++) {
        const rowsDataSplitted = rowsData[i].split(',')

        if (headerCSV.length === rowsDataSplitted.length) {
          file = rowsDataSplitted[0]
          const line = {}
          for (let j = 1; j < headerCSV.length; j++) {
            line[headerCSV[j]] = rowsDataSplitted[j]
          }
          lines.push(line)
        }
      }
      obj = { file, lines }
    }
  }

  return obj
}
