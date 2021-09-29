import React, { useEffect, useState } from 'react'
import {FaAngleDoubleRight} from "react-icons/fa";

function CreateList() {

    const url = "https://course-api.com/react-tabs-project" ;
    const [reviews , setReviews] = useState([]) ;
    const [selected , setSelect] = useState(0) ;
    const [loading , setLoading] = useState(true) ;

    useEffect(()=>{
              const reviewsData = async () =>  {
                const dataFetch = await fetch(url) ;
                const response = await dataFetch.json() ;
                setSelect(0)
                setReviews(response) ;
                setLoading(false) ;           
            }

                reviewsData() ;
            } , [])
    
        const changeItem = (index = 0) => {
        setSelect(index)
    }
    if(loading){
      return(
        <p>
          loading ....
        </p>
      )
    }
    const {id , title , dates , duties , company} = reviews[selected] ;
    return (
        <section className="content-container w-100 d-flex justify-content-between my-5 flex-column flex-sm-row">
        <section className="left-side w-25  d-flex flex-row flex-sm-column">
          <ul className="d-flex flex-column">
              {
                  reviews.map((value,index)=>{
                      let active = "" ;
                      if(index === selected) {
                          active = "active";
                      }

                      return(
                          <li onClick={()=>changeItem(index)} key={value.id} className={`list-name-item px-4 mb-4 ${active} `}>{value.company}</li>
                      )
                  })
              }
            
          </ul>
        </section>
        
        <section className="right-side w-100 w-sm-75 d-flex flex-column align-items-center">
            <div className="top-content-box d-flex w-100 flex-column">
              <h3 className="top-content-title mb-2">
                {
                  title
                }
              </h3>
              <span className="carrier-tag d-inline-block alert-secondary p-1 px-3 my-1">
              {
                  company
                }
                </span>
                <p className="date-box text-secondary my-2">
                {
                  dates
                }
                </p>
            </div>
          <article className="right-content-box d-flex w-100 mb-5">
            <ul className="content-container d-flex flex-column w-100">
             
              {
                duties.map((value,index)=>{
                  return(
                    <li key={index} className="content-item d-flex w-100  align-items-center justify-content-start">

                <FaAngleDoubleRight className="item-list-style text-primary d-flex align-items-center" />

                <p className="content-desc h-100 m-0 d-flex align-items-center justify-content-start">
                      {value}
                  </p>
                  
                  </li>
                  )
                })
              }
              
            </ul>
          </article>
        </section>
      </section>
    )
}

export default CreateList
