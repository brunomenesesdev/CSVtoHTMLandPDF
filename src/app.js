const Reader = require("./services/Reader")
const Processor = require("./services/Processor")
const Table = require('./services/Table')
const HtmlParser = require('./services/HtmlParser')
const Writer = require('./services/Writer')
const PdfWriter = require('./services/PdfWriter')

const reader = new Reader()
const writer = new Writer()

async function main(){

  // Get File .csv and read
  const data = await reader.Read("./tmp/data.csv")
  
  // Process data to array
  const dataProcessed = Processor.process(data)

  // Convert to table, rows and columns
  const table = new Table(dataProcessed)

  // Convert file to Html
  const html = await HtmlParser.Parse(table)
  
  // Save file HTML and PDF
  writer.Write(`./tmp/html/${Date.now()}.html`, html)
  PdfWriter.WritePDF(`./tmp/pdf/${Date.now()}.PDF`, html)
  
}


main()

