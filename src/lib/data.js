import { fullEmployee } from '../lib/placeholder.js'

const isMock = true

/**
 * GET
 * Fetches a mocked list or data from the server for fully defined employees
 * @function
 * @param {number} amt
 * @returns fullEmployees[]
 **/
export async function fetchFullEmployee(amt) {
  if (isMock) {
    return await new Promise(() => setTimeout(mock_fullEmployees(amt), 3000))
  } else {
    // this is an example route to server
    const result = await fetch('http://localhost:5036/employees')
    return await result.json()
  }
}

/**
 * GET
 * Returns a list of employees from the server API
 * @returns items[] json employee objects
 */
export async function fetchEmpList() {
  const result = await fetch('http://localhost:5036/employees')
  return await result.json()
}

const fullEmployees = []

/**
 * Gets a mocked list of full employees
 * @function
 * @returns [] list of placeholders
 **/
function mock_fullEmployees(amt) {
  let id = 1
  for (let i = 0; i < amt; i++) {
    let fe = {
      id: `${id}`,
      fName: `${fullEmployee.fName}_${id}`,
      lName: `${fullEmployee.lName}_${id}`,
      email: `${id}_${fullEmployee.email}`,
      roleName: `${fullEmployee.roleName}_${id % 25}`,
      deptName: `${fullEmployee.deptName}_${id % 9}`,
      teamName: `${fullEmployee.teamName}_${id % 5}`,
    }
    fullEmployees.push(fe)
  }
}
