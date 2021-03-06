import React from 'react'
import {Helmet} from 'react-helmet'
const Meta = ({title,description,keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name = 'keyword' content={keywords}/>
        </Helmet>
    )
}
Meta.defaultProps={
            tittle:'Welcome To TechShop', 
            description:'We sell the best products for cheap',
            keywords:'electronics,buy Electronics'
       }
   

export default Meta
