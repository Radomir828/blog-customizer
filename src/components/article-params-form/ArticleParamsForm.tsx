import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

import { Text } from 'src/ui/text';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';

export const ArticleParamsForm = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	const handleOnChange = () => {};
	return (
		<>
			<ArrowButton
				isOpen={isOpened}
				onClick={() => setIsOpened((currentValue) => !currentValue)}
			/>
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isOpened,
				})}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={null}
						// selected={defaultArticleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleOnChange}
						placeholder='nesto'
					/>

					<RadioGroup
						name={''}
						options={fontSizeOptions}
						selected={{
							title: '',
							value: '',
							className: '',
							optionClassName: undefined,
						}}
						title='размер шрифта'
					/>
					<Select
						title='цвет шрифт'
						selected={defaultArticleState.fontColor}
						options={fontColors}
						onChange={handleOnChange}
					/>
					<Select
						title='цвет фона'
						selected={defaultArticleState.backgroundColor}
						options={backgroundColors}
						onChange={handleOnChange}
					/>
					<Select
						title='ширина контента'
						selected={defaultArticleState.contentWidth}
						options={contentWidthArr}
						onChange={handleOnChange}
					/>

					<Separator />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
