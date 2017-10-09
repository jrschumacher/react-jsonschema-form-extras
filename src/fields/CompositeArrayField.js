import React, { Component } from "react";
import PropTypes from "prop-types";

class CompositeArrayField extends Component {
  handleAdd = list => {
    let { formData = [] } = this.props;
    let newTable = formData.concat(list);
    this.props.onChange(newTable);
  };

  render() {
    let {
      uiSchema: { inputField, arrayField },
      registry: { fields },
    } = this.props;

    let InputElement = fields[inputField];
    let ArrayElement = fields[arrayField];
    return (
      <div>
        <div className="form-group">
          <InputElement {...this.props} onChange={this.handleAdd} />
        </div>
        <div className="form-group">
          <ArrayElement {...this.props} />
        </div>
      </div>
    );
  }
}

CompositeArrayField.propTypes = {
  uiSchema: PropTypes.shape({
    inputField: PropTypes.string.isRequired,
    arrayField: PropTypes.string.isRequired,
  }).isRequired,
  registry: PropTypes.shape({
    fields: PropTypes.object.isRequired,
  }).isRequired,
};

export default CompositeArrayField;