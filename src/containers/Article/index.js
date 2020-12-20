import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";
const imgurl = "https://blog-api.redmondstemcenter.org";
const Article = () => {
  let { id } = useParams(); 
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article }}) =>  { 
        return (
          <div>
             <div>
              <section id="heroT">
                <div class="heroT-container">
                 <h6 class="title">{article.title}</h6>
                </div>
            </section>
            </div>
          <div class="container">
          <div class=" text-center">
           
            <div class="ima">
              <img alt="Blog Post" src={imgurl + article.image.url}></img>
            </div>
            </div> 
           
            <div className="uk-section">
              <div className="uk-container uk-container-small CategoryTitle blue">
                <ReactMarkdown source={article.content} />
               </div>
               <div className="uk-container uk-container-small ">
               <hr class="spacingF"></hr>
               <ul className="uk-navbar-nav">
                
                <div className="uk-container uk-container-small blue">
                  {article.author}    
                </div>              
                
                  <div className="uk-container uk-container-small blue">
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </div>              
              </ul>                
              </div>
            </div>  
          </div>
          </div>
        );
      }}
      
    </Query>
  );
};


export default Article;
