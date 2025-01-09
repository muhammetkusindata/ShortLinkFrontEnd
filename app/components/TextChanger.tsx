"use client";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setText } from '@/app/redux/features/textSlice';

const TextChanger = () => {
  const text = useSelector((state: RootState) => state.text.value);
  const dispatch = useDispatch();

  const changeText = () => {
    const newText = 'Bu, yeni yazıdır!';
    dispatch(setText(newText));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        {text}
      </div>
      <button onClick={changeText} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Yazıyı Değiştir
      </button>
    </div>
  );
};

export default TextChanger;
