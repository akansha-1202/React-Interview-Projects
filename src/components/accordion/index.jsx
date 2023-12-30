import React, { useState } from 'react'
import {data} from "./data"

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [multiple, setMultiple] = useState([]);

    //fucntion for single selection ==> open and close
    const handleSingleClick = (getSelectedId) => {
          setSelected(getSelectedId === selected ? null : getSelectedId)
    }
    
     //fucntion for mutiple selection ==> open and close
    const handleMultipleClick = (getSelectedId) => {
          const copyItem = [...multiple];
          const findFirstIndex = copyItem.indexOf(getSelectedId);

          (findFirstIndex === -1) ? copyItem.push(getSelectedId) : copyItem.splice(findFirstIndex);

          setMultiple(copyItem);
          
    }
    console.log("selected : ",selected, "mutiple", multiple);
  return (
    <div className='flex flex-col items-center gap-y-6 p-12 bg-[#2BBA9E]'>
        <h1 className='text-6xl'>ACCORDIAN</h1>
        <div className='flex items-center gap-x-2'>
          <input type='checkbox' onClick={() => setEnableMultiple(!enableMultiple)} className='w-[15px] h-[15px]' id="check"/>
          <label htmlFor='check' className='text-lg text-red-100' >Enable Multiple Selection</label>
        </div>
        {/* <button onClick={() => setEnableMultiple(!enableMultiple)} className='border-2 border-white rounded-md p-1 bg-blue-200'>Enable Multiple Selection</button> */}
        <div className='w-[60%] shadow-2xl'>
           {
            data && data.length > 0 ?
                    data.map( (item, index) => (
                        <div key={index} className='flex flex-col border-b-2 border-gray-400'>
                            <div onClick={enableMultiple ? () => handleMultipleClick(item.id) : () => handleSingleClick(item.id)}>
                                <div className='flex w-[100%] justify-between font-bold bg-[#EEEEEE] p-4'>
                                    <div>{item.question}</div>
                                    <div>{(selected === item.id) || (multiple.indexOf(item.id) !== -1) ? "-" : "+"}</div>
                                </div>
                            </div>
                            {
                              enableMultiple ? (multiple.indexOf(item.id) !== -1) && <div className='p-4 text-gray-500 bg-white'>{item.answer}</div>
                              :
                                (selected === item.id) ? 
                                  <div className='p-4 text-gray-500 bg-white'>{item.answer}</div>
                                  : null
                            }
                        </div>
                    ))
             :
             <div>No data is found.....‼️</div>
           }
        </div>
    </div>
  )
}

export default Accordian