import React from 'react';
import classes from './Component404.module.css';
import DocumentTitle from "react-document-title";

const Component404: React.FC = () => (
  <DocumentTitle title="404">
    <div className={classes.Component404}>
      <h1 className={classes.error}>Error 404, Page not found</h1>
      <p className={classes.paragraph}>Du scheinst vom Pfad abgekommen zu sein.<br/>
         Hier, lass mich dir helfen<br/>
         <a className={classes.back} href="/">Zur sicheren Seite</a>
      </p>
      <img className={classes.skeleton} src="skeletons/single_skeleton_dance.gif"/>
    </div>
  </DocumentTitle>
);

export default Component404;
