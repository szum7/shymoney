UPDATE [DBSHYMONEYV1].[dbo].[SUM]
SET	ACCOUNT_DATE = INPUT_DATE, 
	DUE_DATE = INPUT_DATE;

ALTER TABLE [DBSHYMONEYV1].[dbo].[SUM] ALTER COLUMN INPUT_DATE datetime NOT NULL;
ALTER TABLE [DBSHYMONEYV1].[dbo].[SUM] ALTER COLUMN ACCOUNT_DATE datetime NOT NULL;
ALTER TABLE [DBSHYMONEYV1].[dbo].[SUM] ALTER COLUMN DUE_DATE datetime NOT NULL;