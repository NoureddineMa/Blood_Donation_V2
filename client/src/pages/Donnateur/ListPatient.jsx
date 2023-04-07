import React from 'react'

function ListPatient() {
    return (
        <>
              <div class="overflow-x-auto rounded-lg border border-gray-200 mt-5 ">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Nom
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Prénom
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Email
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Adresse
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  City
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Nature de sang
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Date de Naissance
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )   
}

export default ListPatient
