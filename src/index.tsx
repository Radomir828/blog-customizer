import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appValues, setAppValues] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
