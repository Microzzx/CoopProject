import './select.css'
import { useRef, useState } from "react"
import Location from './data.json'


const getDataViaProvince = (province) => {
  let qs = JSON.parse(JSON.stringify(Location))
  return qs.filter(data => data.province.startsWith(province.trim())).slice(0, 50)
}

const getDataViaDistrict = (district) => {
  let qs = JSON.parse(JSON.stringify(Location))
  return qs.filter(data => data.province.startsWith(district.trim())).slice(0, 50)
}

const getDataViaTambol = (tambol) => {
  let qs = JSON.parse(JSON.stringify(Location))
  return qs.filter(data => data.province.startsWith(tambol.trim())).slice(0, 50)
}

const getDataViaIndex = (index) => {
  return JSON.parse(JSON.stringify(Location))[index]
}

const ProvinceSelect = (props) => {

  const provinceRef = useRef()
  const districtRef = useRef()
  const tambolRef = useRef()
  const [choices, setChoices] = useState(getDataViaProvince(''))

  return (
    <div>
      <input
        list='province-data' ref={provinceRef}
        style={{
          width: '250px'
        }}
        onInput={(e) => {
          e.preventDefault()
          let province = e.target.value
          setChoices(getDataViaProvince(province))
        }}
        onChange={(e) => {
          let i = e.target.value
          if(!Number.isNaN(i) && i >= 0 && i <= 50)
          {
            provinceRef.current.value = getDataViaIndex(i).province
            districtRef.current.value = getDataViaIndex(i).district
            tambolRef.current.value = getDataViaIndex(i).tambol
          }
        }}
      />
      <input
        list='province-data' ref={districtRef}
        style={{
          width: '250px'
        }}
        onInput={(e) => {
          e.preventDefault()
          let district = e.target.value
          setChoices(getDataViaDistrict(district))
        }}
        onChange={(e) => {
          let i = e.target.value
          if(!Number.isNaN(i) && i >= 0 && i <= 50)
          {
            provinceRef.current.value = getDataViaIndex(i).province
            districtRef.current.value = getDataViaIndex(i).district
            tambolRef.current.value = getDataViaIndex(i).tambol
          }
        }}
      />
      <input
        list='province-data' ref={tambolRef}
        style={{
          width: '250px'
        }}
        onInput={(e) => {
          e.preventDefault()
          let tambol = e.target.value
          setChoices(getDataViaTambol(tambol))
        }}
        onChange={(e) => {
          let i = e.target.value
          if(!Number.isNaN(i) && i >= 0 && i <= 50)
          {
            provinceRef.current.value = getDataViaIndex(i).province
            districtRef.current.value = getDataViaIndex(i).district
            tambolRef.current.value = getDataViaIndex(i).tambol
          }
        }}
      />
      <datalist id='province-data'>
        {
          choices.map((choice, index) => {
            let addr = `${choice.tambol} ${choice.district}, ${choice.province}`
            return (
              <option
                key={index}
                value={index}
              >{addr}</option>
            )
          })
        }
      </datalist>
    </div>
  )
}

export default ProvinceSelect