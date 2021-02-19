class Processor{
  static process(data){
    const array = data.split("\r\n")

    const rows = array.map(row => {
      return row.split(",")
    })

    return rows
  }
}

module.exports = Processor;