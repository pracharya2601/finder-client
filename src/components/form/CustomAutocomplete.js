import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { likeItem } from '../../redux/actions/dataAction';

export class CustomAutocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
  };

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    const {
      input,
      label,
      rows,
      type,
      placeholder,
      outlined,
      fieldArray,
      helperText,
      loading,
      multiline,
      initialValues,
      meta: { touched, error },
    } = this.props;

    // if (initialValues)
    const styleUl = {
      display: 'block',
      background: '#e3dede',
      padding: '2px 10px',
      fontSize: '1rem',
      width: '',
      marginTop: '0',
      cursor: 'pointer',
      position: 'absolute',
      zIndex: '1000',
    };

    const likeItem = {
      display: 'block',
      padding: '2px 10px',
      fontSize: '1rem',
      color: '#7a7a7a',
    };
    const liActive = {
      display: 'block',
      padding: '2px 10px',
      fontSize: '1rem',
      color: '#633d3d',
    };

    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul style={styleUl}>
            {filteredOptions.map((optionName, index) => {
              let className = index === activeOption ? liActive : likeItem;

              return (
                <li style={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = <div>{null}</div>;
      }
    }
    return (
      <React.Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          // value={userInput}
          {...input}
          style={{
            boxSizing: 'border-box',
            height: '50px',
            width: '100%',
            fontSize: '17px',
            padding: '10px',
            background: '#fffff2',
            border: '1px solid #cfcccc',
            borderRadius: '3px',
          }}
        />
        {optionList}
      </React.Fragment>
    );
  }
}

export default CustomAutocomplete;
