# n8n_linkedin_search_compiler_and_cover_letter_writer_workflow
Automated daily n8n workflow to search LinkedIn job postings and add scored matche to an excel sheet with a custom cover letter.

Step 1: automated trigger to run daily at 9am.
Step 2: download resume pdf.
Step 3: Extract text for AI agent to read.
Step 4: Query exclusions list in google sheet for later filtering from reults.
Step 5: Query search criteria for LinkedIn search URL: Keyword, Location, Remote, Job Type.
Step 6: Javascipt to convert keywords into an executable search url.
Step 7: Run Search Query.
Step 8: Extract all job links from search results page HTML.
Step 9: Split string of links into individual items. 
Step 10: Begin Loop 
Step 11: Wait 10 sec (LinkedIn rate limiting)
Step 12: Fetch the first job posting from the links
Step 13: Extract HTML into JSON: Title, Company, Location, Description, JobID.
Step 14: Modify job data for agent: Title, Company, Location, Description, JobID, ApplyLink.
Step 15: Filter out jobs by data entered in Exclusions sheet: Companies, Roles, Application Links (pulled into Sheet form results page via Google App Script. 
Step 16: If/Then: If any of the exclusion criteria are met, restart loop, if not, pass to next step. 
Step 17: AI Agent: Llama3.1:8b run locally with ollama.
Step 18: Parses AI text output to add score and cover letter. 
Step 19: Add Title, Company, Location, application link, score, description, Cover Letter to Results sheet.
Re-enter Loop (runs 60 times, takes about 10 minutes to complete all 60) 
