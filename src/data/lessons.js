// Comprehensive Lesson Content for Florida P&C Exam
// Each lesson ties to question explanations for wrong-answer routing

export const lessons = {
  // ============================================
  // TERMS & CONCEPTS LESSONS
  // ============================================
  'insurable-interest': {
    id: 'insurable-interest',
    topic: 'terms-concepts',
    title: 'Insurable Interest',
    content: `
## What is Insurable Interest?

Insurable interest means you would suffer a **financial loss** if the insured property is damaged or destroyed, or if the insured person dies or is injured.

### Key Points

- Without insurable interest, an insurance contract is void and unenforceable
- Insurable interest prevents insurance from being used as gambling
- The insured must have insurable interest at the time of the loss (for property) or at policy inception (for life)

### Examples of Insurable Interest

**Property Insurance:**
- Homeowners have insurable interest in their home
- Mortgagees (lenders) have insurable interest in mortgaged property
- Tenants have insurable interest in their personal property and improvements

**Liability Insurance:**
- Anyone can have insurable interest in potential liability claims against them

### When Insurable Interest Must Exist

| Insurance Type | When Required |
|---------------|---------------|
| Property | At the time of loss |
| Life | At policy inception |
| Liability | Throughout policy period |

### Florida Exam Tip
Questions often test whether someone has insurable interest. Remember: you must have a financial stake - either you own it, have a security interest, or would suffer financially if it's lost.
    `
  },

  'indemnity': {
    id: 'indemnity',
    topic: 'terms-concepts',
    title: 'Principle of Indemnity',
    content: `
## Principle of Indemnity

The principle of indemnity states that insurance should restore the insured to the **same financial position** they were in immediately before the loss - no better, no worse.

### Purpose

- Prevents insureds from profiting from a loss
- Ensures insurance serves to "make whole" not enrich
- Maintains the integrity of the insurance system

### How It Works

If your car worth $15,000 is totaled:
- Insurance pays $15,000 (minus deductible)
- You cannot receive $20,000
- You're restored to where you were, not better off

### Exceptions to Pure Indemnity

1. **Valued Policies**: Pay agreed amount regardless of actual value (fine art, antiques)
2. **Replacement Cost**: Pays to replace without depreciation deduction
3. **Life Insurance**: Not indemnity contracts (pay stated face amount)

### Related Concepts

- **Subrogation**: Supports indemnity by preventing double recovery
- **Other Insurance Clauses**: Prevent collecting from multiple policies for same loss
- **ACV vs. Replacement Cost**: Different approaches to valuation

### Florida Exam Tip
Indemnity is fundamental - insurance restores, not enriches. Know that life insurance is NOT an indemnity contract because you can't truly "indemnify" a human life.
    `
  },

  'proximate-cause': {
    id: 'proximate-cause',
    topic: 'terms-concepts',
    title: 'Proximate Cause',
    content: `
## Proximate Cause

Proximate cause (causa proxima) is the **direct, unbroken chain of events** that leads to a loss. It's the "efficient cause" that sets a sequence of events in motion.

### Why It Matters

Insurers use proximate cause to determine if a loss is covered:
- If the proximate cause is a covered peril → Claim paid
- If the proximate cause is excluded → Claim denied

### Chain of Causation Example

**Scenario**: Lightning strikes a tree → Tree falls on house → House catches fire

- **Proximate cause**: Lightning (covered under most policies)
- **Resulting damage**: Fire, structural damage (both covered)
- Even though fire caused most damage, lightning was the proximate cause

### Concurrent Causation

When multiple causes contribute to a loss simultaneously:
- **Dependent causes**: One wouldn't occur without the other
- **Independent causes**: Could each cause the loss alone

Many policies have "anti-concurrent causation" clauses that deny coverage if ANY cause is excluded.

### Florida Exam Tip
Look for the FIRST event in the chain that directly led to the loss. That's usually the proximate cause. Don't be distracted by intermediate events.
    `
  },

  'coinsurance': {
    id: 'coinsurance',
    topic: 'terms-concepts',
    title: 'Coinsurance',
    content: `
## Coinsurance Clause

Coinsurance requires the insured to carry insurance equal to a specified percentage of the property's value (typically 80%, 90%, or 100%).

### The Coinsurance Formula

\`\`\`
Payment = (Amount Carried / Amount Required) × Loss
\`\`\`

### Example Calculation

- Building value: $500,000
- Coinsurance requirement: 80%
- Amount required: $500,000 × 80% = $400,000
- Actual coverage: $300,000
- Loss: $100,000

**Calculation:**
($300,000 / $400,000) × $100,000 = $75,000 paid

The insured becomes a "co-insurer" for the 25% shortfall.

### Key Points

- Coinsurance penalty applies when you're underinsured
- Does not apply to losses exceeding the coinsurance requirement
- Always carry at least the required percentage to avoid penalties

### Florida Exam Tip
MEMORIZE the formula. The exam loves coinsurance calculations. Remember:
1. Calculate amount required (value × coinsurance %)
2. Divide amount carried by amount required
3. Multiply by the loss
4. Payment cannot exceed policy limit OR the loss
    `
  },

  'deductibles': {
    id: 'deductibles',
    topic: 'terms-concepts',
    title: 'Deductibles',
    content: `
## Deductibles

A deductible is a **specific dollar amount** the insured must pay before insurance coverage kicks in.

### Purpose of Deductibles

1. Eliminate small, administrative-heavy claims
2. Reduce moral and morale hazard
3. Lower premium costs
4. Keep insured invested in loss prevention

### Types of Deductibles

**Flat Deductible**: Fixed dollar amount ($500, $1,000)

**Percentage Deductible**: Percentage of value or coverage
- Common in hurricane coverage (2% of dwelling value)

**Aggregate Deductible**: Annual total before coverage applies

**Split Deductible**: Different deductibles for different perils

### Deductibles vs. Coinsurance

| Feature | Deductible | Coinsurance |
|---------|------------|-------------|
| Type | Dollar amount | Percentage requirement |
| When it applies | Every claim | When underinsured |
| Purpose | Share small losses | Encourage adequate coverage |

### Florida Hurricane Deductibles

Florida allows separate, higher hurricane deductibles (often 2%, 5%, or 10% of Coverage A). These apply per-season, not per-storm.

### Florida Exam Tip
Know the difference between deductibles and coinsurance - they're commonly confused. Deductibles are flat amounts subtracted from claims; coinsurance penalizes underinsurance.
    `
  },

  'loss-valuation': {
    id: 'loss-valuation',
    topic: 'terms-concepts',
    title: 'Loss Valuation Methods',
    content: `
## Loss Valuation Methods

How losses are valued determines how much the insurer pays.

### Actual Cash Value (ACV)

**ACV = Replacement Cost - Depreciation**

- Accounts for age, wear, and obsolescence
- Most common valuation method
- Results in lower payments than replacement cost

**Example:**
- 10-year-old roof, 20-year life expectancy
- Replacement cost: $20,000
- Depreciation: 50% ($10,000)
- ACV: $10,000

### Replacement Cost

- Cost to replace with new property of like kind and quality
- NO deduction for depreciation
- Requires higher premiums
- Usually requires actual replacement before full payment

### Other Valuation Methods

**Market Value**: What property would sell for (rarely used in insurance)

**Stated/Agreed Value**: Amount agreed upon at policy inception

**Functional Replacement**: Cost to replace with functionally equivalent property

### Florida Exam Tip
ACV = Replacement Cost minus Depreciation. Replacement cost pays MORE because there's no depreciation deduction. Know the difference!
    `
  },

  'negligence': {
    id: 'negligence',
    topic: 'terms-concepts',
    title: 'Negligence',
    content: `
## Negligence

Negligence is the failure to exercise the degree of care that a **reasonably prudent person** would exercise under similar circumstances.

### Four Elements of Negligence

To prove negligence, all four must be established:

1. **Duty**: Defendant owed a duty of care to plaintiff
2. **Breach**: Defendant breached that duty
3. **Causation**: Breach directly caused the harm
4. **Damages**: Actual harm or loss occurred

### Types of Negligence

**Ordinary Negligence**: Failure to use ordinary care

**Gross Negligence**: Reckless disregard for others' safety

**Comparative Negligence**: Damages reduced by plaintiff's fault percentage

**Contributory Negligence**: Any plaintiff fault bars recovery (rare)

### Florida's Comparative Negligence

Florida follows **modified comparative negligence**. If you're more than 50% at fault, you cannot recover. If 50% or less at fault, recovery is reduced by your fault percentage.

### Defense Against Negligence

- Assumption of risk
- Comparative/contributory negligence
- Last clear chance doctrine

### Florida Exam Tip
MEMORIZE the four elements: Duty, Breach, Causation, Damages. Questions often test whether all elements are present.
    `
  },

  'subrogation': {
    id: 'subrogation',
    topic: 'terms-concepts',
    title: 'Subrogation',
    content: `
## Subrogation

Subrogation allows an insurer who has paid a claim to "step into the shoes" of the insured and pursue recovery from the party responsible for the loss.

### How Subrogation Works

1. Insured suffers loss caused by third party
2. Insurer pays the claim
3. Insurer acquires right to sue the responsible party
4. Insurer recovers from responsible party

### Purpose

- Prevents insured from collecting twice (from insurer AND tortfeasor)
- Holds wrongdoers accountable
- Helps keep premiums lower

### Insured's Obligations

- Cannot impair insurer's subrogation rights
- Cannot settle with responsible party without insurer's consent
- Must cooperate with insurer's recovery efforts

### When Subrogation Does NOT Apply

- Life insurance
- Health insurance (though contribution may exist)
- When waived by endorsement (common in commercial contracts)

### Florida Exam Tip
Remember: After paying a claim, the insurer can go after whoever caused the loss. The insured must not do anything to interfere with this right.
    `
  },

  'perils-hazards': {
    id: 'perils-hazards',
    topic: 'terms-concepts',
    title: 'Perils and Hazards',
    content: `
## Perils and Hazards

### Perils

A peril is a **specific cause of loss** - the event that directly causes damage.

**Examples of Perils:**
- Fire, lightning, windstorm
- Theft, vandalism
- Flood, earthquake
- Collision, falling objects

**Policy Types:**
- **Named Perils**: Only covers perils specifically listed
- **Open Perils (All Risk)**: Covers all perils except those excluded

### Hazards

A hazard is a **condition that increases** the likelihood or severity of loss.

**Types of Hazards:**

| Type | Definition | Example |
|------|------------|---------|
| Physical | Tangible conditions | Icy sidewalk, faulty wiring |
| Moral | Dishonesty, fraud | Arson for profit |
| Morale | Carelessness, indifference | Not locking doors because insured |
| Legal | Increases liability exposure | Laws, court decisions |

### Florida Exam Tip
Perils CAUSE losses; hazards INCREASE the chance of loss.
- Moral hazard = dishonesty (think "immoral")
- Morale hazard = carelessness (think "low morale about preventing loss")
    `
  },

  'coverage-triggers': {
    id: 'coverage-triggers',
    topic: 'terms-concepts',
    title: 'Coverage Triggers',
    content: `
## Coverage Triggers: Occurrence vs. Claims-Made

### Occurrence Coverage

Covers incidents that **occur during the policy period**, regardless of when the claim is filed.

**Key Points:**
- Long "tail" of coverage after policy ends
- More expensive
- Common in general liability
- No retroactive date concerns

**Example:**
Policy period: 2024
Injury occurs: December 2024
Claim filed: March 2026
**Covered** - injury occurred during policy period

### Claims-Made Coverage

Covers claims **reported during the policy period**, regardless of when the incident occurred (subject to retroactive date).

**Key Points:**
- Must report claim while policy is active
- Retroactive date limits how far back coverage extends
- "Tail" coverage (Extended Reporting Period) may be needed
- Common in professional liability

**Example:**
Policy period: 2024
Retroactive date: January 2022
Incident: March 2023
Claim filed: June 2024
**Covered** - claim made during policy, incident after retro date

### Florida Exam Tip
Occurrence = when it happened; Claims-made = when you reported it. Know that claims-made policies need a retroactive date and may need tail coverage when policy ends.
    `
  },

  // ============================================
  // POLICY PROVISIONS LESSONS
  // ============================================
  'policy-parts': {
    id: 'policy-parts',
    topic: 'policy-provisions',
    title: 'Parts of an Insurance Policy',
    content: `
## Parts of an Insurance Policy

Every insurance policy contains standard sections:

### 1. Declarations (Dec Page)

The "who, what, when, where, how much" of the policy:
- Named insured
- Policy period
- Property/risk description
- Coverage limits
- Premium amounts
- Deductibles

### 2. Insuring Agreement

The heart of the policy - the insurer's promise to pay for covered losses in exchange for premium. Defines what is covered.

### 3. Conditions

Duties and requirements for both parties:
- Premium payment
- Loss notification
- Proof of loss
- Cooperation
- Subrogation
- Cancellation procedures

### 4. Exclusions

What is NOT covered:
- Specific perils excluded
- Property excluded
- Losses excluded
- Persons excluded

### 5. Definitions

Specific meanings of terms used in the policy.

### 6. Endorsements/Riders

Amendments that modify, add, or remove coverage.

### Florida Exam Tip
The Declarations identify basic facts; the Insuring Agreement states coverage; Conditions state duties; Exclusions remove coverage. Know each section's purpose!
    `
  },

  'contract-elements': {
    id: 'contract-elements',
    topic: 'policy-provisions',
    title: 'Elements of a Valid Contract',
    content: `
## Four Essential Elements of a Contract

For an insurance contract to be valid and enforceable:

### 1. Offer and Acceptance

- **Offer**: Usually the application for insurance
- **Acceptance**: Insurer issues the policy
- Creates "meeting of the minds" (mutual assent)

### 2. Consideration

Exchange of value:
- **Insured's consideration**: Premium payment + promises in application
- **Insurer's consideration**: Promise to pay covered losses

### 3. Legal Purpose

- Contract must be for lawful objective
- Cannot insure illegal activities
- Cannot violate public policy

### 4. Competent Parties

Both parties must have legal capacity:
- Of legal age (18 in Florida)
- Mentally competent
- Not under duress
- Insurer must be licensed

### Additional Contract Requirements

**Legal Form**: Some contracts must be in writing (Statute of Frauds)

### Florida Exam Tip
MEMORIZE: Offer & Acceptance, Consideration, Legal Purpose, Competent Parties. Questions often ask what makes a contract valid or what could void it.
    `
  },

  'contract-characteristics': {
    id: 'contract-characteristics',
    topic: 'policy-provisions',
    title: 'Insurance Contract Characteristics',
    content: `
## Unique Characteristics of Insurance Contracts

### Aleatory

One party may receive more value than the other based on chance:
- Insured may pay premiums for years, receive nothing
- Or, have huge claim shortly after purchase

### Unilateral

Only one party (insurer) makes a legally enforceable promise:
- Insurer must pay covered claims
- Insured can cancel anytime, no obligation to continue

### Conditional

Insurer's obligations depend on insured meeting conditions:
- Paying premium
- Reporting losses promptly
- Cooperating with investigations

### Contract of Adhesion

- Insurer drafts the contract
- Insured accepts or rejects (no negotiation)
- **Ambiguities interpreted against the insurer** (drafter)

### Personal Contract

- Insures the person, not just the property
- Cannot be freely transferred without insurer consent
- Why insurers underwrite the person

### Utmost Good Faith

Both parties must deal honestly:
- Full disclosure of material facts
- No concealment or misrepresentation

### Florida Exam Tip
Know what each characteristic means. "Adhesion" is especially important - because the insured can't negotiate terms, courts interpret ambiguities in the insured's favor.
    `
  },

  'duties-after-loss': {
    id: 'duties-after-loss',
    topic: 'policy-provisions',
    title: 'Duties After a Loss',
    content: `
## Insured's Duties After a Loss

### Immediate Duties

1. **Give prompt notice** to insurer or agent
2. **Protect property** from further damage
3. **Notify police** if theft or crime involved

### Documentation Duties

4. **Prepare inventory** of damaged/stolen property
5. **Show damaged property** to insurer
6. **Provide proof of loss** (sworn statement) - usually within 60 days
7. **Submit to examination under oath** if requested

### Cooperation Duties

8. **Cooperate** with insurer's investigation
9. **Provide records** and documents
10. **Do not abandon property** to insurer

### Failure to Perform Duties

Failure to comply with policy conditions can result in:
- Denial of claim
- Reduced payment
- Policy voidance (in severe cases)

### Florida Exam Tip
The insured has DUTIES, not just rights. Prompt notice, proof of loss, and cooperation are frequently tested. Know the typical timeframes (60 days for proof of loss).
    `
  },

  'mortgagee-rights': {
    id: 'mortgagee-rights',
    topic: 'policy-provisions',
    title: 'Mortgagee Rights and Obligations',
    content: `
## Standard Mortgage Clause

Protects the mortgagee's (lender's) interest separately from the insured's coverage.

### Mortgagee Protections

1. **Separate coverage**: Mortgagee's coverage not voided by insured's acts
2. **Notice of cancellation**: Must receive advance notice (usually 30 days)
3. **Right to pay premium**: If insured defaults on premium
4. **Named in loss payment**: Checks made payable to mortgagee

### Mortgagee Obligations

1. **Notify insurer** of any change in ownership/occupancy they know of
2. **Pay premium** if insured fails to
3. **Submit proof of loss** if insured fails to
4. **Surrender subrogation rights** if paid as mortgagee

### Loss Payment

- Mortgage clause payments go to mortgagee
- Payment won't exceed mortgagee's interest
- Insurer acquires subrogation rights against insured

### Florida Exam Tip
The mortgagee has SEPARATE protection. Even if the insured commits fraud, the mortgagee is still covered. This is a common exam topic!
    `
  },

  // ============================================
  // FLORIDA-SPECIFIC LESSONS
  // ============================================
  'citizens': {
    id: 'citizens',
    topic: 'residual-markets',
    title: 'Citizens Property Insurance Corporation',
    content: `
## Citizens Property Insurance Corporation

Florida's state-created **insurer of last resort** for property insurance.

### Purpose

- Provide coverage when private market unavailable
- NOT meant to compete with private insurers
- Safety net for Florida homeowners

### Eligibility

1. Cannot obtain comparable coverage from admitted insurer
2. Property meets underwriting criteria
3. Coverage cannot be obtained at rates lower than Citizens

### Key Features

- Not-for-profit
- Created by Florida Legislature
- Governed by Board of Governors
- Subject to assessments

### Assessment Risk

If Citizens has a deficit:
1. First, Citizens policyholders assessed
2. Then, ALL Florida property policyholders assessed
3. Assessments can be significant after major hurricanes

### Depopulation

Citizens actively works to move policies to private market:
- "Take-out" companies assume policies
- Helps reduce Citizens' exposure
- Policyholders may be transferred

### Florida Exam Tip
Citizens is LAST RESORT - not a competitor. Know that ALL Florida property policyholders (not just Citizens customers) can be assessed if Citizens has losses exceeding reserves.
    `
  },

  'figa': {
    id: 'figa',
    topic: 'florida-statutes',
    title: 'Florida Insurance Guaranty Association',
    content: `
## FIGA - Florida Insurance Guaranty Association

Protects policyholders when insurance companies become **insolvent** (go bankrupt).

### How FIGA Works

1. P&C insurer becomes insolvent
2. FIGA steps in to pay covered claims
3. Member insurers assessed to fund payments

### Coverage Limits

- **$300,000** maximum for most claims
- Different limits may apply for certain claims
- Does NOT cover surplus lines carriers

### What FIGA Covers

- Claims from insolvent admitted insurers
- Policies in effect when insurer declared insolvent
- Florida risks only

### What FIGA Does NOT Cover

- Surplus lines (non-admitted) insurers
- Deductibles
- Punitive damages
- Amounts exceeding limits
- Life and health (separate guaranty associations)

### Funding

Member insurers pay assessments based on premium volume. These costs are often passed to policyholders.

### Florida Exam Tip
FIGA pays claims when insurers fail - up to $300,000. Remember: FIGA does NOT cover surplus lines carriers or amounts over the limit.
    `
  },

  'pip-florida': {
    id: 'pip-florida',
    topic: 'motor-vehicle',
    title: 'Florida PIP Coverage',
    content: `
## Florida Personal Injury Protection (PIP)

Florida is a **no-fault** auto insurance state. PIP provides coverage regardless of who caused the accident.

### Required Coverage

- **$10,000 PIP** - mandatory for all Florida vehicle registrations
- **$10,000 PDL** (Property Damage Liability) - also required

### PIP Benefits

| Benefit | Coverage |
|---------|----------|
| Medical expenses | 80% of reasonable charges |
| Lost wages | 60% of lost income |
| Death benefits | $5,000 |
| Replacement services | $20/day |

### 14-Day Rule

**CRITICAL**: Insured must seek initial medical treatment within **14 days** of accident to receive full PIP benefits.

- If no treatment within 14 days: Limited to $2,500
- Must be from qualified provider

### PIP Covers

- Named insured
- Resident relatives
- Passengers in insured vehicle
- Pedestrians struck by insured vehicle

### Florida Exam Tip
KNOW THE 14-DAY RULE - it's frequently tested! Also remember: 80% medical, 60% lost wages, $10,000 limit.
    `
  },

  'chapter-626': {
    id: 'chapter-626',
    topic: 'florida-statutes',
    title: 'Florida Statutes Chapter 626',
    content: `
## Chapter 626 - Insurance Field Representatives

Governs licensing, conduct, and discipline of insurance agents, adjusters, and other representatives.

### Key Sections

**626.112** - License required to transact insurance

**626.611** - Grounds for compulsory refusal, suspension, or revocation:
- Fraud or misrepresentation
- Felony conviction
- Misappropriation of funds
- Willful violation of insurance laws

**626.621** - Grounds for discretionary discipline:
- Demonstrated incompetence
- Failure to comply with CE requirements
- Excessive controlled business

**626.9521** - Unfair insurance trade practices

### Prohibited Practices

- Twisting
- Churning
- Rebating
- Misrepresentation
- Unfair discrimination
- Unfair claims practices

### Penalties

- Fines up to $5,000 per violation
- License suspension or revocation
- Criminal charges for unlicensed activity (3rd degree felony)

### Florida Exam Tip
Chapter 626 = Agents/Adjusters/Licensing. Know the prohibited practices (twisting, churning, rebating) and that unlicensed activity is a FELONY!
    `
  },

  'prohibited-practices': {
    id: 'prohibited-practices',
    topic: 'florida-statutes',
    title: 'Prohibited Insurance Practices',
    content: `
## Prohibited Practices in Florida

### Twisting

Inducing an insured to replace existing insurance through **misrepresentation** of policy terms.

**Example**: Telling a client their current policy won't pay claims (when it will) to get them to switch.

### Churning

Causing excessive, unnecessary policy changes to generate **additional commissions**.

**Example**: Repeatedly replacing policies for the same client when there's no benefit to the client.

### Rebating

Giving anything of value not specified in the policy as an inducement to purchase insurance.

**Example**: Offering cash back, gifts, or services in exchange for buying a policy.

**Exceptions**: Some items of nominal value may be permitted (pens, calendars).

### Misrepresentation

Making false or misleading statements about:
- Policy terms or benefits
- Competitor's products
- Insurer's financial condition

### Unfair Discrimination

Treating similarly situated individuals differently based on:
- Race, religion, national origin
- Sex, marital status (in most cases)
- Other non-risk factors

### Florida Exam Tip
MEMORIZE: Twisting = misrepresenting to replace; Churning = excessive replacements for commissions; Rebating = giving value not in policy. All are PROHIBITED.
    `
  },

  // ============================================
  // CASUALTY LESSONS
  // ============================================
  'cgl': {
    id: 'cgl',
    topic: 'casualty-policies',
    title: 'Commercial General Liability (CGL)',
    content: `
## Commercial General Liability Policy

The CGL is the foundation of business liability protection.

### Three Main Coverages

**Coverage A - Bodily Injury and Property Damage Liability**
- Third-party bodily injury
- Third-party property damage
- Includes defense costs

**Coverage B - Personal and Advertising Injury**
- Libel, slander, defamation
- False arrest, malicious prosecution
- Wrongful eviction
- Copyright infringement in ads

**Coverage C - Medical Payments**
- Medical expenses regardless of fault
- Good faith coverage for minor injuries
- Lower limits (typically $5,000-$10,000)

### Coverage Forms

1. **Occurrence Form**: Covers incidents during policy period
2. **Claims-Made Form**: Covers claims reported during policy period

### Common Exclusions

- Expected or intended injury
- Contractual liability (limited coverage)
- Workers compensation
- Auto liability
- Professional liability
- Pollution

### Florida Exam Tip
Know the three coverages (A, B, C) and what each covers. Coverage A is BI/PD, Coverage B is personal/advertising injury, Coverage C is medical payments.
    `
  },

  'workers-comp': {
    id: 'workers-comp',
    topic: 'casualty-policies',
    title: 'Workers Compensation Insurance',
    content: `
## Workers Compensation Insurance

Mandatory coverage for workplace injuries and illnesses.

### Key Concept: No-Fault

- Employee injured on job receives benefits regardless of fault
- In exchange, employee gives up right to sue employer
- "Exclusive remedy" doctrine

### Coverage Parts

**Part One - Workers Compensation**
- Medical expenses (100%, no limit)
- Disability benefits (temporary/permanent)
- Rehabilitation costs
- Death benefits
- Based on state statutory requirements

**Part Two - Employers Liability**
- Lawsuits outside workers comp system
- Third-party-over actions
- Dual capacity claims
- Typical limits: $100,000/$500,000/$100,000

### Florida Requirements

- Employers with **4 or more employees** must have coverage
- Construction industry: **1 or more employees**
- Penalties for non-compliance include stop-work orders

### Exempt Employees (can be excluded)

- Corporate officers (may opt out)
- Sole proprietors
- Partners
- Independent contractors (if properly classified)

### Florida Exam Tip
Workers comp is NO-FAULT - employee gets benefits regardless of who caused the injury. Know the Florida thresholds (4 employees general, 1 in construction).
    `
  },

  'pap': {
    id: 'pap',
    topic: 'motor-vehicle',
    title: 'Personal Auto Policy (PAP)',
    content: `
## Personal Auto Policy Structure

The PAP has four main parts plus additional coverage.

### Part A - Liability Coverage

- Bodily injury liability
- Property damage liability
- Defense costs (in addition to limits)
- Covers named insured, family, and permissive users

### Part B - Medical Payments

- Medical expenses for insured and passengers
- Regardless of fault
- Limited coverage ($1,000-$10,000 typical)

### Part C - Uninsured/Underinsured Motorist

- Covers injuries caused by:
  - Uninsured drivers
  - Underinsured drivers
  - Hit-and-run drivers
- Can be "stacked" in Florida

### Part D - Physical Damage

**Collision**: Damage from collision with object or vehicle
**Comprehensive (Other Than Collision)**: All other physical damage perils
- Theft, fire, flood, vandalism
- Falling objects, animals
- Glass breakage

### Who Is an Insured?

1. Named insured and family members (any auto)
2. Any person using covered auto with permission
3. Persons/organizations liable for named insured's acts

### Florida Exam Tip
Know all four parts: A=Liability, B=Med Pay, C=UM/UIM, D=Physical Damage. Remember Part C can be "stacked" to increase UM limits in Florida.
    `
  },

  // ============================================
  // AGENT LICENSING LESSONS
  // ============================================
  'agent-authority': {
    id: 'agent-authority',
    topic: 'agent-licensing',
    title: 'Types of Agent Authority',
    content: `
## Agent Authority

Authority defines what an agent can legally do on behalf of the insurer.

### Express Authority

Power **specifically granted in writing**:
- Listed in agency agreement
- Explicitly stated in contract
- Clear and unambiguous

**Examples**: Authority to bind certain coverages, collect premiums, issue certificates

### Implied Authority

Power **reasonably necessary** to carry out express duties:
- Not explicitly stated but assumed
- Customary for the role

**Examples**: Authority to accept premium payments, complete applications, explain coverage

### Apparent Authority

Power the public **reasonably believes** the agent has based on insurer's conduct:
- Created by insurer's actions or representations
- Insurer can be bound even if agent wasn't actually authorized

**Example**: Agent has office with insurer's name, gives quotes - public believes agent can bind coverage.

### Agent vs. Broker

| Agent | Broker |
|-------|--------|
| Represents insurer | Represents insured |
| Authority from insurer | Authority from client |
| Insurer responsible for acts | Personal liability |

### Florida Exam Tip
EXPRESS = written; IMPLIED = necessary for the job; APPARENT = what public believes. Know that apparent authority can still bind the insurer!
    `
  },

  'licensing-requirements': {
    id: 'licensing-requirements',
    topic: 'agent-licensing',
    title: 'Florida Licensing Requirements',
    content: `
## Florida Insurance License Requirements

### 2-20 General Lines License

**Pre-Licensing Education**: 200 hours total
- 40 hours Property insurance
- 40 hours Casualty insurance
- 40 hours Health insurance
- 40 hours Life insurance
- 40 hours Other (including 3 hours Ethics)

**State Examination**:
- 108 questions (100 scored, 8 pretest)
- 2 hours time limit
- 70% passing score
- Administered by Pearson VUE

### Application Requirements

- Be at least 18 years old
- Be a U.S. citizen or legal alien
- Complete fingerprinting/background check
- No disqualifying criminal history
- Complete pre-licensing education
- Pass state exam

### Continuing Education

- **24 hours every 2 years**
- Must include hours in laws and ethics
- First renewal may have additional requirements

### License Maintenance

- Keep address current (notify within 30 days of change)
- Maintain appointments
- Complete CE on time
- Renew before expiration

### Florida Exam Tip
Remember: 200 hours pre-licensing, 70% to pass, 24 hours CE every 2 years. Address changes must be reported within 30 days!
    `
  },

  'mbi': {
    id: 'mbi',
    topic: 'mechanical-breakdown',
    title: 'Mechanical Breakdown Insurance',
    content: `
## Mechanical Breakdown Insurance (MBI)

Coverage for vehicle repair costs when mechanical/electrical systems fail.

### What MBI Covers

- Engine and transmission failure
- Electrical system breakdown
- Air conditioning failure
- Steering and suspension
- Fuel system components

### What MBI Does NOT Cover

- Routine maintenance (oil, filters, brakes)
- Pre-existing conditions
- Damage from accidents
- Wear items (tires, brake pads, wipers)
- Damage from misuse or neglect
- Cosmetic damage

### MBI vs. Service Contracts

| Feature | MBI | Service Contract |
|---------|-----|------------------|
| Regulation | Insurance laws | Not insurance |
| Issued by | Insurance companies | Dealers, manufacturers |
| Licensing | P&C license required | No insurance license |
| Backing | State guaranty fund | Company only |

### Who Buys MBI?

- New car buyers wanting extended protection
- Used car buyers
- People keeping vehicles beyond factory warranty
- Those wanting insurance-regulated protection

### Florida Exam Tip
MBI is REGULATED AS INSURANCE in Florida - requires a P&C license to sell. Service contracts are NOT insurance and don't require an insurance license.
    `
  }
};

// Get lesson by ID
export function getLessonById(lessonId) {
  return lessons[lessonId] || null;
}

// Get all lessons for a topic
export function getLessonsByTopic(topicId) {
  return Object.values(lessons).filter(lesson => lesson.topic === topicId);
}

// Get lesson for a specific question
export function getLessonForQuestion(questionId, questions) {
  const question = questions.find(q => q.id === questionId);
  if (!question) return null;
  return lessons[question.lessonId] || null;
}
