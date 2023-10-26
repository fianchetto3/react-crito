import React from 'react'
import img_businessImage from '../../assets/images/business-image-article.png'
import img_phoneArtical from '../../assets/images/phone-article.png'
import img_blockArticle from '../../assets/images/block-article.png'
import img_laptopArticle from '../../assets/images/laptop-article.png'

function ArticleBox( {title, url} ) {
    let image = ''
    if(title === 'Grow your Business'){
        image = img_businessImage;
    }else if (title === 'Why your client needs a responsive website'){
        image = img_phoneArtical
    }else if (title === 'Educate your employees to get better results'){
        image = img_blockArticle
    }else if (title === 'Business Insights is a important piece of your business'){ 
        image = img_laptopArticle
    }

  return (
    <article>
    <img src={image} alt={title} className="article-image" />
    <h3> {title} </h3>
    <a href={url}>Read More <i className="fa-regular fa-arrow-up-right"></i> </a>
</article>
  )
}

export default ArticleBox