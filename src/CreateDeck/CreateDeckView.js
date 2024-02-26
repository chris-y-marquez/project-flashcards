import React from "react"

function CreateDeckView({ formData, setFormData }) {
  
  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="name"
            className="form-control"
            placeholder="Deck Name"
            required
            onChange={changeHandler}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            type="description"
            className="form-control"
            placeholder="Brief description of the deck"
            required
            onChange={changeHandler}
            value={formData.description}
          />
        </div>
      </form>
    </React.Fragment>
  );
}
export default CreateDeckView