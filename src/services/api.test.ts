import api from "./api";


describe('Testing', () => {
  test('Tes', () => {
    api.get(`/location/search/?lattlong=50.068,-5.316`).then(response => {
      console.log(response.data)
    })
  });
})