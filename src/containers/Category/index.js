import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

const Category = () => {
  let { id } = useParams();

  return (
    <div>
      <section id="heroM">
                <div class="heroM-container">
                 <h6 class="title">RSC Blog</h6>
                </div>
            </section>
    <div class="uk-container">
    <div class="row">
     <div class="col-md-3">
         <div class="sidebar">
          
             <div class="categories widget">
              <Link to="/"> <h3 class="CategoryTitle" >Categories / All</h3></Link>     
                
                 
   <Query query={CATEGORIES_QUERY} id={null}>
     {({ data: { categories } }) => {
       return (
      
                 <ul>                  
               {categories.map((category, i) => {
                   return (                          
                     <li key={category.id}>
                       <Link
                         to={`/category/${category.id}`}
                         className="CategoryTitle"
                       >
                         {category.name}
                       </Link>
                       
                     </li>
                   );
                 })}                    
               </ul>                               
                 
       );
     }}
   </Query>
             </div>     
           </div> 
          </div> 
                 
         
       <div className="col-md-9">
       <div class="cardHoldingMargin2">
       <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
                <Articles articles={category.articles} />             
        );
      }}
    </Query>
       </div> 
       </div>
       </div> 
       </div>
       </div> 
);

};

export default Category;
