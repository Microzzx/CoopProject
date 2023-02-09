import React from "react";

function Employee(props) {
  const {joblist, onChange} = props;

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
            value={joblist.civil}
            onChange={(e) => {
              onChange({civil:e.target.value})
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
            value={joblist.electrical}
            onChange={(e) => {
              onChange({electrical:e.target.value})
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
            value={joblist.fore}
            onChange={(e) => {
              onChange({fore:e.target.value})
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
            value={joblist.chief1}
            onChange={(e) => {
              onChange({chief1:e.target.value})
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
            value={joblist.chief2}
            onChange={(e) => {
              onChange({chief2:e.target.value})
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
            value={joblist.chief3}
            onChange={(e) => {
              onChange({chief3:e.target.value})
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
            value={joblist.worker}
            onChange={(e) => {
              onChange({worker:e.target.value})
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
            value={joblist.mechanic1}
            onChange={(e) => {
              onChange({mechanic1:e.target.value})
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
            value={joblist.mechanic2}
            onChange={(e) => {
              onChange({mechanic2:e.target.value})
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
            value={joblist.mechanic3}
            onChange={(e) => {
              onChange({mechanic3:e.target.value})
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
