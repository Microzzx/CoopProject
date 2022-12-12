import React from "react";

function Employee(props) {
  const {
    civil,
    setCivil,
    electrical,
    setElectrical,
    fore,
    setFore,
    chief1,
    setChief1,
    chief2,
    setChief2,
    chief3,
    setChief3,
    worker,
    setWorker,
    mechanic1,
    setMechanic1,
    mechanic2,
    setMechanic2,
    mechanic3,
    setMechanic3,
  } = props;

  return (
    <div className="row row-cols-auto g-3 top-row">
    <div className="col-md-0"></div>
    <div className="col-md-1">
      <label className="label">แบ่งเป็น</label>
    </div>
    <div className="col-md-1-mr-2">
      <div className="field">
        <label className="label mbc">วิศวกรโยธา</label>
        <br />
        <label className="label mbc">วิศวกรไฟฟ้า</label>
        <br />
        <label className="label mbc">โฟร์แมน</label>
        <br />
        <label className="label mbc">หัวหน้าช่าง</label>
        <br />
        <label className="label mbc">หัวหน้าช่าง</label>
        <br />
        <label className="label mbc">หัวหน้าช่าง</label>
        <br />
        <label className="label mbc">แรงงาน</label>
      </div>
    </div>

    <div className="col">
      <div className="field">
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputCivil"
            value={civil}
            onChange={(e) => {
              setCivil(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputElectrical"
            value={electrical}
            onChange={(e) => {
              setElectrical(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputFore"
            value={fore}
            onChange={(e) => {
              setFore(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputCMechanic1"
            value={chief1}
            onChange={(e) => {
              setChief1(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputCMechanic2"
            value={chief2}
            onChange={(e) => {
              setChief2(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputCMechanic3"
            value={chief3}
            onChange={(e) => {
              setChief3(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputWorker"
            value={worker}
            onChange={(e) => {
              setWorker(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-0"></div>
    <div className="col-ml-5">
      <div className="field">
        <div className="label mbc"></div>
        <br />
        <div className="label mbc"></div>
        <br />
        <div className="label mbc"></div>
        <br />
        <label className="label mbc">ช่าง</label>
        <br />
        <label className="label mbc">ช่าง</label>
        <br />
        <label className="label mbc">ช่าง</label>
      </div>
    </div>
    <div className="col">
      <div className="field">
        <div className="label mbc"></div>
        <br />
        <div className="label mbc"></div>
        <br />
        <div className="label mbc"></div>
        <br />
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputMechanic1"
            value={mechanic1}
            onChange={(e) => {
              setMechanic1(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputMechanic2"
            value={mechanic2}
            onChange={(e) => {
              setMechanic2(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="ระบุจำนวน"
            id="inputMechanic3"
            value={mechanic3}
            onChange={(e) => {
              setMechanic3(e.target.value);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              คน
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Employee;
