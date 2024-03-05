"use client"

import React from "react"
import { Col, Row } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { style } from "@mui/system"
import { orange, whiteA } from "@radix-ui/colors"
import Container from "react-bootstrap/Container"

import styles from "./indiaImport.module.css"
import ForeignImports from "@/components/india-imports/foreign-imports"
import IndiaChapterView from "@/components/india-imports/india-chapter-view"
import IndiaImportersList from "@/components/india-imports/india-importers-list"
import BarChart from "@/components/india-imports/chapter-view-chart"

// export const metadata = {
//   title: "Live Animal Imports USD 57 Million | 81696 Live Animal Importers in IndiaLive Animal Imports USD 57 Million | 81696 Live Animal Importers in India",
//   description: "Market Inside Data shows that Live animal imports into India during June 2019 to May 2020 totalled USD 57 Million. Total number of shipments arrived to India for live animal - chapter 01 were 56546 shipments covers name of 81696 live animal importers and trade more statistics."
// }

function IndiaImport() {
  const [country, setCountry] = React.useState("")
  const [option, setOption] = React.useState("")

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value)
  }

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value)
  }

  return (
    <div>
      <div className={styles.mex_export_background_div}>
        <div className={styles.mex_export_background}>
          <div className={styles.countryOption}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={country}
                onChange={handleChangeCountry}
                label="Country"
              >
                <MenuItem value="">
                  <em>Global</em>
                </MenuItem>
                <MenuItem value={10}>India</MenuItem>
                <MenuItem value={20}>Brazil</MenuItem>
                <MenuItem value={30}>United State</MenuItem>
                <MenuItem value={30}>Argentina</MenuItem>
                <MenuItem value={30}>Canada</MenuItem>
                <MenuItem value={30}>Mexico</MenuItem>
                <MenuItem value={30}>Russia</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200, ml: 4 }}>
              <Select
                value={option}
                onChange={handleChangeOption}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Export</em>
                </MenuItem>
                <MenuItem value={20}>Import</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={styles.headerleftDiv}>
            <div>
              <img src="../../india-map-marketinside.png" />
            </div>
            <div className={styles.headerrightDiv}>
              <h1 style={{ color: "white" }}>India Import Data</h1>
              <p style={{ color: "white" }}>
                Access online India import data with Indian importer names,
                their shipment details, contact information and other useful
                trade data.
              </p>
              <div>
                {/* <BarChart /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.threeDivs}>
        <div className={styles.singlediv}>
          <center>
            {" "}
            <img src="../../ship_records.png" width="30%" />
          </center>{" "}
          <h4 style={{ color: "orange", marginTop: "20px" }}>260297810+</h4>
          <p style={{ fontWeight: "700" }}>Shipment Records</p>
        </div>

        <div className={styles.singlediv}>
          <center>
            <img src="../../company_informatins.png" width="30%" />
          </center>{" "}
          <h4 style={{ color: "orange", marginTop: "20px" }}>369693+</h4>
          <p style={{ fontWeight: "700" }}>Importers in India</p>
        </div>

        <div className={styles.singlediv}>
          <center>
            <img src="../../data_transfer.png" width="30%" />
          </center>
          <h4 style={{ color: "orange", marginTop: "20px" }}>1000000+</h4>
          <p style={{ fontWeight: "700" }}>Company Contacts</p>
        </div>
      </div>

      <div className={styles.tardeDataParentDiv}>
        <div className={styles.tradeDataDiv}>
          <div className={styles.tradeDataLeftDiv}>
            <h2 style={{ color: "orange", fontSize: "5vh" }}>
              India Trade Data
            </h2>
            <p style={{ color: "grey", lineHeight: "2", marginTop: "5vh" }}>
              India Trade data contains Indian Importer Name, Supplier Details,
              Quantity, Import Price, Commodity description and other detailed
              data of shipment. Here is the example for your review.
            </p>
            <a
              className={styles.btn_reqdm_dldsmls}
              href="marketinside-data-sample.xlsx"
            >
              Download Sample
            </a>
          </div>
          <div className={styles.tradeDataImg}>
            <img src="../../india-import-data-sample.png" width="100%" />
          </div>
        </div>

        <div className={styles.tradeDataSecDiv}>
          <div>
            <h2>Are you interested in India import data?</h2>
          </div>
          <div>
            <a
              style={{ width: "20vw" }}
              className={styles.btn_reqdm_dldsmls}
              href="marketinside-data-sample.xlsx"
            >
              Download Sample
            </a>
          </div>
        </div>
      </div>

      {/* <div className="mexico_mejoarcomdt">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#yorkminster"
                    data-toggle="tab"
                  >
                    Commodities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#yorkcastle" data-toggle="tab">
                    Table
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane show active"
              id="yorkminster"
            >
              <div className="row mjrcmddtds">
                <div className="col-md-5 col-xs-12">
                  <div className="commo_rank">
                    <h2>{"India's"} Major Import Commodities</h2>
                    <p>
                      India stand at rank 11 in global import. India Imported
                      goods worth of USD 367 Billion from February 2020 to
                      January 2021, monthly averaged USD 31 billion, reaching an
                      all-time high in Dec 2020 of 43 USD billion and a record
                      low of USD 19 billion in Apr 2020 during the same period.
                    </p>
                    <br />
                    <p>
                      {"India's"} top import products are Mineral Fuels & Oils
                      (US$ 101348 Million), Electrical Machinery and Electronics
                      (US$ 43160 Million), Machinery, Mechanical Appliances,
                      etc. (US$ 34982 Million), Pearls and Precious Stones (US$
                      30207 Million) and Organic Chemicals (US$ 20101 Million)
                      between February 2020 to January 2021.
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-xs-12">
                  <div className="commo-maparea">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default IndiaImport
