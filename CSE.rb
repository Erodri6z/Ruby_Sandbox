

def fix_spelling(name)
  if name.downcase == "twitter" || 
    name.downcase.include?("twit") || 
    name.downcase.include?("tw") &&
    name.downcase.include?("t") && 
    name.downcase.include?("er")
    if name.length >= 10
      name = name
    else
      name = "Twitter"
    end
  else 
    name = name
  end
  name
end

puts fix_spelling("twit")
puts fix_spelling("twtiter")
puts fix_spelling("twtter")
puts fix_spelling("two seater")
puts fix_spelling("Facebook")
puts fix_spelling("twittttttttttteradad")
puts fix_spelling("Thank You for this opportunity, Intercom!")





# issues ----------------
# 1. Basic issue with this code is the fact that its a recuring function when it doesn not have to be.
# 2. Second issue is replacing the = opporator in the initial conditional with == due to the fact we are not declaring a value we are checking if its the case
# 3. Third issue resolved is the fact that adding return to "name" is not only redundant since what is return is done so implicitly, but having quotations around name will return the string "name" rather than the value.
# 4. Forth issue I ran into was the the fact that this would only work if twitter was typed in like "twittr" which while if thats all that is needed for this to work this should be done, otherwise maybe checking for a substring such as "twit", or "tw" and "er" would be more appropiate
# 5. Fifth issue I found was the fact that with said conditionals, it would be possible that something such as "twittttttttttttttter" and "two seater" would technically be passed as a twitter typo, so to accomodate for that I added a character limit, seeing as twitter. Seeing as twitter only has 7 characters I think making the limit 10 should be enough to catch most typos without allowing long strings to be spellchecked to twitter.
# 6. Sixth issue I made sure to test it by feading this function common twitter misspellings and then some spellings that simply do not make any sense. 
