import React from 'react';
import Option from './option';

const Options = (props) => {
  return (
    <div>
      <div className="options-header">
        <span>Your options</span>
        <button
          onClick={props.removeAllOptions}
          disabled={!props.options || props.options.length === 0}>
            Remove all options
        </button>
      </div>
      <div className="options-content">
        { props.options && props.options.length > 0
          ? <div>
              {
                props.options.map((option) => 
                  <Option key={option} option={option}/>
                )
              }
            </div>
          : <span>No options</span>
        }
      </div>
    </div>
  );
}

export default Options;
