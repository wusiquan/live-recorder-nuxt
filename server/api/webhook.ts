export default defineEventHandler(async (event) => {
  console.log(111, getRequestHeaders(event))

  setResponseStatus(event, 201)
  // event.node.res.write('Accepted')
  return 'Accepted'
})
