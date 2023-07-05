import React,{useState} from 'react';
export default function Imagetwo() {
  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const [dataUri, setDataUri] = useState('');

  const onChange = (file) => {
    if (!file) {
      setDataUri('');
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      console.log(dataUri);
      setDataUri(dataUri);
    });
  };

  return (
    <div>
      <img width="200" height="200" src={dataUri} alt="avatar" />
      <input
        type="file"
        onChange={(event) => onChange(event.target.files[0] || null)}
      />
    </div>
  );
}
