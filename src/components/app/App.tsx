import { CSSProperties, useState } from 'react';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from '../../styles/index.module.scss';

export const App = () => {
	const [appValues, setAppValues] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': appValues.fontFamilyOption.value,
					'--font-size': appValues.fontSizeOption.value,
					'--font-color': appValues.fontColor.value,
					'--container-width': appValues.contentWidth.value,
					'--bg-color': appValues.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppState={setAppValues} />
			<Article />
		</main>
	);
};
