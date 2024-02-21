
import ShipmentRecordsTable from "../search/shipment-records-table"

const ShipmentRecords = () => {
  return (
    <div id="shipment-record" className="p-[50px]">
      <div className="mb-10 p-8 text-center text-3xl ">
        Shipment Records
      </div>
      <ShipmentRecordsTable />
    </div>
  )
}

export default ShipmentRecords
