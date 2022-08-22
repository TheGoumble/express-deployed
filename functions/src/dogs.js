export function getDogs(req, res) {
  res.send([
    { name: "ryder", age: 4, breed: "Dumbass", gender: "MN" },
    { name: "duke", age: 4, breed: "mut", gender: "M" },
  ])
}

export function testApi(req, res) {
  res.send({ success: true, message: "API is working" })
}
