import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

import { Text } from 'src/ui/text';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';

type ArticleParamsFormProps = {
	setAppState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { setAppState } = props;

	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleOnChange = (key: string, value: OptionType) => {
		setFormState((currentFormState) => ({
			...currentFormState,
			[key]: value,
		}));
	};

	const handleOnSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setAppState(formState);
	};

	const handleOnReset = (event: React.FormEvent) => {
		event.preventDefault();
		setAppState(defaultArticleState);
		setFormState(defaultArticleState);
	};

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
				<form
					className={styles.form}
					onSubmit={handleOnSubmit}
					onReset={handleOnReset}>
					<Text as='h2' size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => handleOnChange('fontFamilyOption', option)}
					/>

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title='размер шрифта'
						onChange={(option) => handleOnChange('fontSizeOption', option)}
					/>
					<Select
						title='цвет шрифт'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(option) => handleOnChange('fontColor', option)}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(option) => handleOnChange('backgroundColor', option)}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(option) => handleOnChange('contentWidth', option)}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
