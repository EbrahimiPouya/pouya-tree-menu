import React from 'react';
import TreeFolder from "./TreeFolder";
import './style.css'

interface PropsT {
    onChange: () => void,
    permissions: [],
}

const NewRolePermissions = ({
                                onChange = () => {
                                },
                                permissions = [],
                            }: PropsT) => {


    // treeData: [
    //     { title: 'Chicken', children: [{ title: 'Egg' }] },
    //     { title: 'Fish', children: [{ title: 'fingerline' }] },
    // ],
    // permissions: props.permissions,


    return (
        <div>
            {/*{data && data[0] &&*/}
            {/*<ul style={{listStyleType: 'none'}}>*/}
            {/*    {*/}
            {/*        data.map((permissionCategoryItem, index) => {*/}
            {/*            if (permissionCategoryItem.permissions && Object.keys(permissionCategoryItem.permissions).length > 0) {*/}
            {/*                return (*/}
            {/*                    <TreeFolder key={index}*/}
            {/*                                permissions={permissions}*/}
            {/*                                index={index}*/}
            {/*                                defaultCollapseState={true}*/}
            {/*                                name={permissionCategoryItem.title}*/}
            {/*                                data={permissionCategoryItem.permissions}*/}
            {/*                                onChange={(_value, _isChecked) => {*/}
            {/*                                    let _permissions: string[] = [...permissions];*/}
            {/*                                    if (_isChecked) {*/}
            {/*                                        _permissions.push(_value);*/}
            {/*                                    } else {*/}
            {/*                                        let findIndex = _permissions.findIndex((item) => item === _value)*/}
            {/*                                        if (findIndex > -1) {*/}
            {/*                                            _permissions.splice(findIndex, 1);*/}
            {/*                                        }*/}
            {/*                                    }*/}
            {/*                                    this.setState({permissions: _permissions}, () => {*/}
            {/*                                        onChange(this.state.permissions);*/}
            {/*                                    });*/}
            {/*                                }}*/}
            {/*                    />*/}
            {/*                )*/}
            {/*            }*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}

            <ul style={{listStyleType: 'none'}}>
                <TreeFolder
                    defaultCollapseState={false}
                    isChecked={true} name={'aa'} onChange={() => {
                }}
                    permissions={[]}
                    index={0}
                    data={{aaa: {
                        title: 'aaaa',
                            subs: {}
                        }}}
                />
                <TreeFolder isChecked={false} name={'bb'} onChange={() => {
                }} permissions={{jjj: ['aaa']}} index={0} data={{aaa: ['aaa']}}/>
            </ul>
        </div>
    );
}

export default NewRolePermissions
