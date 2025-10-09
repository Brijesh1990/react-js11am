import React from 'react'
export default function ReadAttendance() {
  return (
    <div>
    <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2024-06-10</td>
                <td>Present</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>2024-06-10</td>
                <td>Absent</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Bob Lee</td>
                <td>2024-06-10</td>
                <td>Present</td>
            </tr>
        </tbody>
    </table>
      
    </div>
  )
}
