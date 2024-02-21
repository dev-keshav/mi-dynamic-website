import CompanyEmployeeTable from "@/components/company/company-employee-table"

const CompanyEmployeeRecord = () => {
  return (
    <div id="shipment-record" className="p-[50px]">
      <div className="mb-10 p-8 text-center text-3xl " style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
        Company Employee Contacts
      </div>
      <CompanyEmployeeTable />
    </div>
  )
}

export default CompanyEmployeeRecord
