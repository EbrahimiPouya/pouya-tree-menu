import React, {useState} from 'react';
import TreeRenderItem from "./TreeRenderItem";

interface dataType {
    [key : string] : {title: string, sub?: dataType}
}

interface PropsT {
    defaultCollapseState?: boolean,
    isChecked: boolean,
    name: string,
    data?: dataType,
    value?: string,
    parentId?: string,
    onChange: (value: string, isChecked: boolean)=>void,
    permissions: string[],
    index: number,
}
const TreeFolder = ( {defaultCollapseState= true,
                         name= 'new folder',
                         data= {},
                         isChecked= false,
                         value= undefined,
                         parentId= undefined,
                         onChange= ()=>{},
    permissions= [],} : PropsT)=>{

    const [myCollapse, setMyCollapse] = useState<boolean>(defaultCollapseState)


    const _onChange = (_value: string, _isChecked: boolean)=>{
        onChange(_value,  _isChecked )
    }


        return (
            <li className={`permission-folder-li permission-folder-li`}>
                <TreeRenderItem
                    name={name}
                    isCollapse={myCollapse}
                    isChecked={isChecked}
                    onChange={(_isChecked)=>{_onChange(`${value}` , _isChecked)}}
                    haveChildren={data && Object.keys(data).length > 0}
                    haveParent={!!parentId}
                    onChangeCollapseState={(_isCollapse)=>{
                        setMyCollapse(_isCollapse)
                    }}
                />


                { !myCollapse &&
                    <ul className="" style={{ marginRight: parentId? '28px': '8px', listStyleType: 'none'}}>
                        {data && Object.keys(data).map((permission, index)=>{
                            return(
                                <TreeFolder
                                    key={index}
                                    index={index}
                                    name={data[permission].title}
                                    data={data[permission].sub}
                                    parentId={permission}
                                    isChecked={permissions.includes(permission)}
                                    permissions={permissions}
                                    value={permission}
                                    onChange={(_value, _isChecked)=>{
                                        onChange( _value , _isChecked)
                                    }}
                                />
                            )
                        })}
                    </ul>
                }
            </li>
        );
}

export default TreeFolder;
