import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
}).format;

export default function Priceinput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        ref={inputComponent}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
      />
    </div>
  );
}

Priceinput.focus = () => {
  this._inputElement.focus();
};
