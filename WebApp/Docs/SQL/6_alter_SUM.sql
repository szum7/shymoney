sp_rename 'dbo.SUM.DATE', 'INPUT_DATE', 'COLUMN';
ALTER TABLE dbo.SUM ADD DUE_DATE datetime NULL AFTER INPUT_DATE;
ALTER TABLE dbo.SUM ADD ACCOUNT_DATE datetime NULL AFTER DUE_DATE;
GO