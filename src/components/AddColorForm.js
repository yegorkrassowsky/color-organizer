const AddColorForm = () => {
  return (
    <div className="row mt-3">
      <div className="col-sm-10">
        <input type="text" className="form-control" placeholder="Color Title" />
      </div>
      <div className="col-sm">
        <input type="color" className="form-control form-control-color" />
      </div>
      <div className="col-sm-auto">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  )
}

export default AddColorForm
