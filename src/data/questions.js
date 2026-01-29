// Comprehensive Florida Property & Casualty Exam Question Bank
// Organized by topic with exam weight percentages

export const TOPICS = {
  'terms-concepts': {
    id: 'terms-concepts',
    name: 'P&C Terms & Concepts',
    weight: 28,
    description: 'Insurance terminology, insurable interest, loss valuation, deductibles, coinsurance'
  },
  'policy-provisions': {
    id: 'policy-provisions',
    name: 'Policy Provisions & Contract Law',
    weight: 24,
    description: 'Declarations, conditions, exclusions, duties, subrogation, contract elements'
  },
  'casualty-policies': {
    id: 'casualty-policies',
    name: 'Casualty Policies & Bonds',
    weight: 15,
    description: 'CGL, auto, workers comp, professional liability, umbrella, BOP'
  },
  'motor-vehicle': {
    id: 'motor-vehicle',
    name: 'Motor Vehicle & Physical Damage',
    weight: 15,
    description: 'Personal auto, business auto, PAP coverages, collision, comprehensive'
  },
  'florida-statutes': {
    id: 'florida-statutes',
    name: 'Florida Statutes & Rules',
    weight: 11,
    description: 'Florida-specific regulations, FIGA, adjuster requirements, ethics'
  },
  'agent-licensing': {
    id: 'agent-licensing',
    name: 'Agent & Agency Licensing',
    weight: 8,
    description: 'Licensing requirements, appointments, CE, fines, suspension'
  },
  'residual-markets': {
    id: 'residual-markets',
    name: 'Residual Markets',
    weight: 2,
    description: 'Citizens, Florida JUA, FWCJUA'
  },
  'mechanical-breakdown': {
    id: 'mechanical-breakdown',
    name: 'Mechanical Breakdown Insurance',
    weight: 2,
    description: 'MBI coverage, exclusions, service contracts'
  }
};

export const questions = [
  // ============================================
  // TERMS & CONCEPTS (28% of exam) - ~60 questions
  // ============================================
  {
    id: 'tc001',
    topic: 'terms-concepts',
    question: 'What is "insurable interest"?',
    options: [
      'A financial stake in the preservation of the insured property or person',
      'The premium amount paid for insurance coverage',
      'The deductible amount on a policy',
      'The maximum coverage limit'
    ],
    correct: 0,
    explanation: 'Insurable interest means the policyholder would suffer a financial loss if the insured property is damaged or the insured person is injured. Without insurable interest, insurance would be considered gambling.',
    lessonId: 'insurable-interest'
  },
  {
    id: 'tc002',
    topic: 'terms-concepts',
    question: 'Which principle states that insurance should restore the insured to the same financial position they were in before the loss?',
    options: [
      'Subrogation',
      'Indemnity',
      'Utmost good faith',
      'Contribution'
    ],
    correct: 1,
    explanation: 'The principle of indemnity ensures that insurance compensates for actual loss without allowing the insured to profit from a loss. The goal is to make the insured "whole" again.',
    lessonId: 'indemnity'
  },
  {
    id: 'tc003',
    topic: 'terms-concepts',
    question: 'What does "proximate cause" mean in insurance?',
    options: [
      'The closest insurance agent to the insured',
      'The direct, unbroken chain of events leading to a loss',
      'The first premium payment',
      'The policy effective date'
    ],
    correct: 1,
    explanation: 'Proximate cause is the direct, uninterrupted cause of a loss. When determining coverage, insurers look for the proximate cause to decide if the loss falls within policy coverage.',
    lessonId: 'proximate-cause'
  },
  {
    id: 'tc004',
    topic: 'terms-concepts',
    question: 'An 80% coinsurance clause requires the insured to carry insurance equal to at least 80% of the property\'s value. If a building worth $500,000 is insured for $300,000, what percentage of a $100,000 loss will the insurance pay?',
    options: [
      '100%',
      '80%',
      '75%',
      '60%'
    ],
    correct: 2,
    explanation: 'The coinsurance formula: (Amount carried / Amount required) × Loss. Required: $500,000 × 80% = $400,000. Payment: ($300,000 / $400,000) × $100,000 = $75,000 or 75%.',
    lessonId: 'coinsurance'
  },
  {
    id: 'tc005',
    topic: 'terms-concepts',
    question: 'What is the difference between a deductible and coinsurance?',
    options: [
      'There is no difference',
      'A deductible is a flat amount; coinsurance is a percentage the insured must carry',
      'Coinsurance is a flat amount; a deductible is a percentage',
      'Deductibles apply to property; coinsurance applies to liability'
    ],
    correct: 1,
    explanation: 'A deductible is a specific dollar amount the insured pays before coverage kicks in. Coinsurance is a clause requiring the insured to maintain coverage at a certain percentage of the property\'s value.',
    lessonId: 'deductibles'
  },
  {
    id: 'tc006',
    topic: 'terms-concepts',
    question: 'What is "actual cash value" (ACV)?',
    options: [
      'The cost to replace property with new property of like kind',
      'Replacement cost minus depreciation',
      'The original purchase price',
      'The insured amount on the declarations page'
    ],
    correct: 1,
    explanation: 'Actual Cash Value = Replacement Cost - Depreciation. ACV accounts for the wear and tear of property over time, representing its current market value.',
    lessonId: 'loss-valuation'
  },
  {
    id: 'tc007',
    topic: 'terms-concepts',
    question: 'What type of loss valuation provides the cost to replace damaged property with new property of similar kind and quality without deducting for depreciation?',
    options: [
      'Actual cash value',
      'Market value',
      'Replacement cost',
      'Stated value'
    ],
    correct: 2,
    explanation: 'Replacement cost coverage pays to replace damaged property with new property of like kind and quality, without deduction for depreciation. This typically requires higher premiums.',
    lessonId: 'loss-valuation'
  },
  {
    id: 'tc008',
    topic: 'terms-concepts',
    question: 'Which of the following best describes "negligence"?',
    options: [
      'Intentionally causing harm to another person',
      'Failure to exercise the degree of care that a reasonable person would',
      'Breaking a criminal law',
      'Violating a contract'
    ],
    correct: 1,
    explanation: 'Negligence is the failure to use reasonable care that a prudent person would exercise under similar circumstances, resulting in harm to another. It\'s a key concept in liability insurance.',
    lessonId: 'negligence'
  },
  {
    id: 'tc009',
    topic: 'terms-concepts',
    question: 'What are the four elements that must be proven to establish negligence?',
    options: [
      'Duty, breach, causation, damages',
      'Intent, action, result, proof',
      'Liability, coverage, deductible, payment',
      'Premium, loss, claim, settlement'
    ],
    correct: 0,
    explanation: 'To prove negligence: (1) Duty - defendant owed a duty of care, (2) Breach - defendant breached that duty, (3) Causation - breach caused the harm, (4) Damages - actual harm occurred.',
    lessonId: 'negligence'
  },
  {
    id: 'tc010',
    topic: 'terms-concepts',
    question: 'What is the doctrine of "subrogation"?',
    options: [
      'The insurer\'s right to recover from a third party responsible for the loss',
      'The insured\'s right to cancel the policy',
      'The agent\'s authority to bind coverage',
      'The process of underwriting a policy'
    ],
    correct: 0,
    explanation: 'Subrogation allows an insurer who has paid a claim to "step into the shoes" of the insured and pursue recovery against the party responsible for the loss.',
    lessonId: 'subrogation'
  },
  {
    id: 'tc011',
    topic: 'terms-concepts',
    question: 'What is a "peril" in insurance terminology?',
    options: [
      'The potential for loss',
      'A specific cause of loss',
      'The probability of loss occurring',
      'The severity of loss'
    ],
    correct: 1,
    explanation: 'A peril is a specific cause of loss, such as fire, windstorm, theft, or flood. Policies may cover named perils (specific list) or open perils (all except those excluded).',
    lessonId: 'perils-hazards'
  },
  {
    id: 'tc012',
    topic: 'terms-concepts',
    question: 'What is a "hazard"?',
    options: [
      'A cause of loss',
      'A condition that increases the likelihood or severity of a loss',
      'The amount of premium paid',
      'The policy deductible'
    ],
    correct: 1,
    explanation: 'A hazard is a condition that creates or increases the chance of loss. Types include physical hazards (icy sidewalk), moral hazards (dishonesty), and morale hazards (carelessness).',
    lessonId: 'perils-hazards'
  },
  {
    id: 'tc013',
    topic: 'terms-concepts',
    question: 'A building owner leaves a building vacant, which increases the risk of vandalism. This is an example of what type of hazard?',
    options: [
      'Physical hazard',
      'Moral hazard',
      'Morale hazard',
      'Legal hazard'
    ],
    correct: 2,
    explanation: 'Morale hazard is carelessness or indifference to loss because insurance exists. The owner is indifferent to the increased risk because they have insurance coverage.',
    lessonId: 'perils-hazards'
  },
  {
    id: 'tc014',
    topic: 'terms-concepts',
    question: 'An insured intentionally sets fire to their building to collect insurance money. This is an example of:',
    options: [
      'Physical hazard',
      'Moral hazard',
      'Morale hazard',
      'Incidental hazard'
    ],
    correct: 1,
    explanation: 'Moral hazard involves dishonesty or character defects that increase the likelihood of loss, such as arson for profit or insurance fraud.',
    lessonId: 'perils-hazards'
  },
  {
    id: 'tc015',
    topic: 'terms-concepts',
    question: 'What is the difference between "occurrence" and "claims-made" coverage triggers?',
    options: [
      'Occurrence covers claims filed during the policy; claims-made covers incidents during the policy',
      'Occurrence covers incidents during the policy period; claims-made covers claims reported during the policy',
      'They are the same thing',
      'Occurrence applies to property; claims-made applies to liability'
    ],
    correct: 1,
    explanation: 'Occurrence policies cover incidents that occur during the policy period, regardless of when the claim is filed. Claims-made policies cover claims reported during the policy period, regardless of when the incident occurred (subject to retroactive dates).',
    lessonId: 'coverage-triggers'
  },
  {
    id: 'tc016',
    topic: 'terms-concepts',
    question: 'What does "limit of liability" mean?',
    options: [
      'The deductible amount',
      'The maximum amount an insurer will pay for a covered loss',
      'The minimum premium required',
      'The policy effective date'
    ],
    correct: 1,
    explanation: 'The limit of liability is the maximum amount the insurer will pay for a covered loss. Policies may have per-occurrence limits, aggregate limits, or both.',
    lessonId: 'limits'
  },
  {
    id: 'tc017',
    topic: 'terms-concepts',
    question: 'What is an "aggregate limit"?',
    options: [
      'The most an insurer will pay for a single loss',
      'The total maximum payment for all losses during the policy period',
      'The deductible amount',
      'The minimum coverage required by law'
    ],
    correct: 1,
    explanation: 'An aggregate limit caps the total amount an insurer will pay for all covered losses during a policy period, regardless of the number of claims.',
    lessonId: 'limits'
  },
  {
    id: 'tc018',
    topic: 'terms-concepts',
    question: 'What is a "warranty" in insurance?',
    options: [
      'A guarantee that the insurer will pay all claims',
      'A statement of fact that must be literally true',
      'The deductible on a policy',
      'A type of endorsement'
    ],
    correct: 1,
    explanation: 'A warranty is a statement guaranteed to be true. If a warranty is breached, the insurer may void the policy, even if the breach is unrelated to the loss.',
    lessonId: 'warranties-representations'
  },
  {
    id: 'tc019',
    topic: 'terms-concepts',
    question: 'What is a "representation" in insurance?',
    options: [
      'A guarantee that must be exactly true',
      'A statement believed to be true that the insurer relies on',
      'The agent representing the insurer',
      'The policy declarations'
    ],
    correct: 1,
    explanation: 'A representation is a statement made by an applicant believed to be true. Unlike warranties, representations need only be substantially true. Material misrepresentations can void coverage.',
    lessonId: 'warranties-representations'
  },
  {
    id: 'tc020',
    topic: 'terms-concepts',
    question: 'What is "concealment" in insurance?',
    options: [
      'Hiding the policy from theft',
      'Intentionally failing to disclose material information to the insurer',
      'The policy exclusions',
      'The waiting period before coverage begins'
    ],
    correct: 1,
    explanation: 'Concealment is the intentional failure to disclose material facts that would affect the insurer\'s decision to provide coverage or set premiums. It can void the policy.',
    lessonId: 'concealment-fraud'
  },
  {
    id: 'tc021',
    topic: 'terms-concepts',
    question: 'What does "vacancy" mean in property insurance?',
    options: [
      'A property with no furniture',
      'A property not occupied for an extended period with no intention to return',
      'A property for sale',
      'An uninsured property'
    ],
    correct: 1,
    explanation: 'Vacancy refers to a property that is not occupied and where the owner has no intention of returning. Many policies restrict or exclude coverage after 30-60 days of vacancy.',
    lessonId: 'vacancy-unoccupancy'
  },
  {
    id: 'tc022',
    topic: 'terms-concepts',
    question: 'What is the difference between vacancy and unoccupancy?',
    options: [
      'They mean the same thing',
      'Vacancy means empty; unoccupancy means no people present but property contains furnishings',
      'Unoccupancy means empty; vacancy means furnished but no people',
      'Vacancy applies to commercial; unoccupancy applies to residential'
    ],
    correct: 1,
    explanation: 'Vacancy means the property is empty with no contents. Unoccupancy means no one is living there but property/furnishings remain. Vacancy typically poses a greater risk.',
    lessonId: 'vacancy-unoccupancy'
  },
  {
    id: 'tc023',
    topic: 'terms-concepts',
    question: 'What is an "endorsement" (also called a rider)?',
    options: [
      'The person who signs the policy',
      'A written amendment that modifies the terms of the policy',
      'The premium payment',
      'The insurance agent\'s license'
    ],
    correct: 1,
    explanation: 'An endorsement is a written document attached to a policy that adds, deletes, or modifies coverage. Endorsements take precedence over standard policy language.',
    lessonId: 'endorsements'
  },
  {
    id: 'tc024',
    topic: 'terms-concepts',
    question: 'What is "cancellation" of an insurance policy?',
    options: [
      'Renewal of the policy',
      'Termination of the policy before its natural expiration date',
      'Adding an endorsement',
      'Filing a claim'
    ],
    correct: 1,
    explanation: 'Cancellation is the termination of a policy before its expiration date. It can be initiated by the insurer (with proper notice) or the insured (often with a short-rate or pro-rata refund).',
    lessonId: 'cancellation-nonrenewal'
  },
  {
    id: 'tc025',
    topic: 'terms-concepts',
    question: 'What is "nonrenewal"?',
    options: [
      'Canceling a policy mid-term',
      'The insurer\'s decision not to continue coverage when the policy expires',
      'The insured\'s refusal to pay premium',
      'A policy endorsement'
    ],
    correct: 1,
    explanation: 'Nonrenewal occurs when an insurer decides not to offer continued coverage at the end of the policy period. Insurers must provide advance notice (typically 30-90 days).',
    lessonId: 'cancellation-nonrenewal'
  },
  {
    id: 'tc026',
    topic: 'terms-concepts',
    question: 'Under "contributing insurance" or "other insurance" clauses, how are losses typically divided when multiple policies cover the same loss?',
    options: [
      'The first policy pays all',
      'Each insurer pays in proportion to their limits',
      'The insured chooses which policy pays',
      'The loss is not covered'
    ],
    correct: 1,
    explanation: 'When multiple policies cover the same loss, each insurer typically pays in proportion to their policy limits (pro rata contribution). This prevents the insured from profiting.',
    lessonId: 'other-insurance'
  },
  {
    id: 'tc027',
    topic: 'terms-concepts',
    question: 'What is "utmost good faith" (uberrima fides)?',
    options: [
      'The insurer must pay all claims',
      'Both parties must deal honestly and disclose all material facts',
      'The agent must always recommend the cheapest policy',
      'The insured can never have their claim denied'
    ],
    correct: 1,
    explanation: 'Utmost good faith requires both the insurer and insured to act honestly and disclose all material information. Insurance contracts rely on trust since the insurer cannot independently verify all facts.',
    lessonId: 'good-faith'
  },
  {
    id: 'tc028',
    topic: 'terms-concepts',
    question: 'What is "risk retention"?',
    options: [
      'Purchasing more insurance',
      'Self-insuring or accepting the risk of loss',
      'Avoiding risky activities',
      'Transferring risk to another party'
    ],
    correct: 1,
    explanation: 'Risk retention means keeping (self-insuring) some or all of a risk rather than transferring it to an insurer. High deductibles and self-insured retentions are forms of risk retention.',
    lessonId: 'risk-management'
  },
  {
    id: 'tc029',
    topic: 'terms-concepts',
    question: 'What is "risk transfer"?',
    options: [
      'Accepting the potential for loss',
      'Shifting the financial consequences of risk to another party',
      'Avoiding all risky activities',
      'Reducing the likelihood of loss'
    ],
    correct: 1,
    explanation: 'Risk transfer shifts the financial burden of potential losses to another party, typically through insurance or contracts (hold harmless agreements, indemnification clauses).',
    lessonId: 'risk-management'
  },
  {
    id: 'tc030',
    topic: 'terms-concepts',
    question: 'What is "loss control" or "loss reduction"?',
    options: [
      'Purchasing insurance',
      'Actions to reduce the frequency or severity of losses',
      'Refusing to file claims',
      'Canceling insurance'
    ],
    correct: 1,
    explanation: 'Loss control involves taking steps to prevent losses or reduce their severity. Examples include fire suppression systems, safety training, and security measures.',
    lessonId: 'risk-management'
  },

  // ============================================
  // POLICY PROVISIONS & CONTRACT LAW (24%) - ~50 questions
  // ============================================
  {
    id: 'pp001',
    topic: 'policy-provisions',
    question: 'Which part of an insurance policy contains basic information such as the insured\'s name, policy period, and coverage amounts?',
    options: [
      'Insuring agreement',
      'Declarations',
      'Conditions',
      'Exclusions'
    ],
    correct: 1,
    explanation: 'The Declarations page (or "Dec page") identifies the insured, policy period, coverage limits, premiums, deductibles, and other basic policy information.',
    lessonId: 'policy-parts'
  },
  {
    id: 'pp002',
    topic: 'policy-provisions',
    question: 'What is the "insuring agreement"?',
    options: [
      'A list of what is not covered',
      'The section that defines the insurer\'s promise to pay for covered losses',
      'The premium payment terms',
      'The cancellation provisions'
    ],
    correct: 1,
    explanation: 'The insuring agreement is the heart of the policy, stating the insurer\'s promise to pay for losses covered under the policy in exchange for premium payment.',
    lessonId: 'policy-parts'
  },
  {
    id: 'pp003',
    topic: 'policy-provisions',
    question: 'What are "conditions" in an insurance policy?',
    options: [
      'Situations where coverage is expanded',
      'Provisions outlining the duties and responsibilities of both parties',
      'Types of losses that are covered',
      'Premium discounts'
    ],
    correct: 1,
    explanation: 'Conditions are provisions that outline duties and responsibilities of both the insurer and insured, such as premium payment, loss reporting, cooperation in claims, and proof of loss.',
    lessonId: 'policy-parts'
  },
  {
    id: 'pp004',
    topic: 'policy-provisions',
    question: 'What are "exclusions" in an insurance policy?',
    options: [
      'Additional coverages',
      'Perils, losses, or property specifically not covered',
      'The premium amounts',
      'The deductible amounts'
    ],
    correct: 1,
    explanation: 'Exclusions identify perils, property, losses, or circumstances that are NOT covered by the policy. They limit the scope of the insuring agreement.',
    lessonId: 'policy-parts'
  },
  {
    id: 'pp005',
    topic: 'policy-provisions',
    question: 'What are the four essential elements required for a valid insurance contract?',
    options: [
      'Premium, policy, agent, insured',
      'Offer and acceptance, consideration, legal purpose, competent parties',
      'Coverage, deductible, limit, exclusions',
      'Application, underwriting, binding, delivery'
    ],
    correct: 1,
    explanation: 'A valid contract requires: (1) Offer and acceptance - mutual agreement, (2) Consideration - exchange of value (premium for coverage), (3) Legal purpose - lawful objective, (4) Competent parties - legal capacity to contract.',
    lessonId: 'contract-elements'
  },
  {
    id: 'pp006',
    topic: 'policy-provisions',
    question: 'In an insurance contract, what is "consideration"?',
    options: [
      'Thinking carefully about purchasing insurance',
      'The exchange of value - premium for the promise to pay losses',
      'The agent\'s commission',
      'The policy period'
    ],
    correct: 1,
    explanation: 'Consideration is the exchange of value that makes a contract binding. In insurance, the insured provides premium payment; the insurer provides the promise to pay for covered losses.',
    lessonId: 'contract-elements'
  },
  {
    id: 'pp007',
    topic: 'policy-provisions',
    question: 'Why is an insurance contract considered a "contract of adhesion"?',
    options: [
      'Because it sticks to the policy jacket',
      'Because one party (the insurer) drafts the terms and the other party accepts or rejects them',
      'Because the insured adheres to the rules',
      'Because it is attached to other policies'
    ],
    correct: 1,
    explanation: 'A contract of adhesion is drafted by one party (insurer) and offered on a take-it-or-leave-it basis. Because the insured has no bargaining power, ambiguities are interpreted in the insured\'s favor.',
    lessonId: 'contract-characteristics'
  },
  {
    id: 'pp008',
    topic: 'policy-provisions',
    question: 'What makes an insurance contract "aleatory"?',
    options: [
      'It requires premium payment',
      'One party may receive more value than the other depending on chance events',
      'It must be in writing',
      'It covers accidental losses'
    ],
    correct: 1,
    explanation: 'An aleatory contract depends on chance. The insured may pay premiums for years without a claim (insurer wins), or have a major claim shortly after purchase (insured wins). The exchange is unequal depending on events.',
    lessonId: 'contract-characteristics'
  },
  {
    id: 'pp009',
    topic: 'policy-provisions',
    question: 'What makes an insurance contract "unilateral"?',
    options: [
      'Only one party makes an enforceable promise',
      'It covers only one type of loss',
      'It insures only one person',
      'It has one exclusion'
    ],
    correct: 0,
    explanation: 'In a unilateral contract, only one party (the insurer) makes a legally enforceable promise. The insured is not required to keep the policy or pay premiums, but if they do, the insurer must perform.',
    lessonId: 'contract-characteristics'
  },
  {
    id: 'pp010',
    topic: 'policy-provisions',
    question: 'What does it mean that insurance is a "personal contract"?',
    options: [
      'It covers personal property only',
      'It cannot be transferred to another party without the insurer\'s consent',
      'It is only sold by personal agents',
      'It covers personal injury only'
    ],
    correct: 1,
    explanation: 'A personal contract insures the person, not the property. Because the insurer agreed to insure a specific person\'s risk, the policy cannot be transferred to another party without the insurer\'s approval.',
    lessonId: 'contract-characteristics'
  },
  {
    id: 'pp011',
    topic: 'policy-provisions',
    question: 'After a loss, what is the insured\'s duty under most property policies?',
    options: [
      'Wait for the insurer to contact them',
      'Promptly notify the insurer, protect property from further damage, and cooperate with investigation',
      'Repair all damage before notifying the insurer',
      'File a lawsuit immediately'
    ],
    correct: 1,
    explanation: 'After a loss, the insured must: (1) Notify the insurer promptly, (2) Protect property from further damage, (3) Provide proof of loss, (4) Cooperate with investigation, (5) Submit to examination under oath if requested.',
    lessonId: 'duties-after-loss'
  },
  {
    id: 'pp012',
    topic: 'policy-provisions',
    question: 'What is a "proof of loss"?',
    options: [
      'Verbal notification to the agent',
      'A sworn statement documenting the facts and amount of loss',
      'The police report',
      'The premium receipt'
    ],
    correct: 1,
    explanation: 'A proof of loss is a sworn statement provided by the insured, documenting the circumstances, date, cause, and amount of the loss. It\'s typically required within 60 days of the insurer\'s request.',
    lessonId: 'duties-after-loss'
  },
  {
    id: 'pp013',
    topic: 'policy-provisions',
    question: 'What is the "mortgage clause" (or "mortgagee clause") in a property policy?',
    options: [
      'A clause that increases the premium',
      'A provision protecting the lender\'s interest in the property',
      'A clause that excludes mortgage fraud',
      'The monthly payment amount'
    ],
    correct: 1,
    explanation: 'The mortgage clause protects the mortgagee\'s (lender\'s) interest. It ensures the lender is paid even if the insured\'s coverage is voided due to fraud or policy violations.',
    lessonId: 'mortgagee-rights'
  },
  {
    id: 'pp014',
    topic: 'policy-provisions',
    question: 'If the insured commits fraud and the policy is voided, what happens to the mortgagee under a standard mortgage clause?',
    options: [
      'The mortgagee also loses coverage',
      'The mortgagee\'s coverage remains intact',
      'The mortgagee must pay additional premium',
      'The policy is reinstated'
    ],
    correct: 1,
    explanation: 'Under a standard mortgage clause, the mortgagee\'s coverage is separate from the insured\'s. The mortgagee is protected even if the insured\'s coverage is voided due to fraud or policy violations.',
    lessonId: 'mortgagee-rights'
  },
  {
    id: 'pp015',
    topic: 'policy-provisions',
    question: 'What is the "liberalization clause"?',
    options: [
      'A clause allowing the insured to pay less premium',
      'A provision that automatically applies broader coverage if the insurer revises forms without additional premium',
      'A clause that allows cancellation at any time',
      'A provision for political coverage'
    ],
    correct: 1,
    explanation: 'The liberalization clause automatically gives insureds the benefit of broader coverage if the insurer revises policy forms during the policy period without requiring additional premium.',
    lessonId: 'policy-provisions'
  },
  {
    id: 'pp016',
    topic: 'policy-provisions',
    question: 'What is the "appraisal clause"?',
    options: [
      'A provision for determining property value before purchase',
      'A procedure for resolving disputes over the amount of a loss',
      'The agent\'s assessment of risk',
      'The premium calculation method'
    ],
    correct: 1,
    explanation: 'The appraisal clause provides a method for resolving disputes about the amount (not coverage) of a loss. Each party selects an appraiser, and the two appraisers select an umpire to make binding decisions.',
    lessonId: 'appraisal'
  },
  {
    id: 'pp017',
    topic: 'policy-provisions',
    question: 'What is "misrepresentation" that could void an insurance policy?',
    options: [
      'Any false statement',
      'A false statement about a material fact that induces the insurer to issue the policy',
      'Forgetting to sign the application',
      'Requesting a higher limit'
    ],
    correct: 1,
    explanation: 'Material misrepresentation is a false statement about an important fact that, if known, would have affected the insurer\'s decision to provide coverage or set premiums. It can void the policy.',
    lessonId: 'misrepresentation'
  },
  {
    id: 'pp018',
    topic: 'policy-provisions',
    question: 'What is "material fact" in insurance?',
    options: [
      'Any fact about the insured',
      'A fact that would affect the insurer\'s decision to provide coverage or set premium rates',
      'The physical materials of the property',
      'The agent\'s sales material'
    ],
    correct: 1,
    explanation: 'A material fact is information that would influence an insurer\'s decision to accept or reject a risk, or to determine the premium. Examples include prior losses, hazardous conditions, or criminal history.',
    lessonId: 'material-facts'
  },
  {
    id: 'pp019',
    topic: 'policy-provisions',
    question: 'Under the "cooperation clause," what must the insured do?',
    options: [
      'Pay an additional premium',
      'Cooperate with the insurer in investigation and defense of claims',
      'Refer all friends to the same insurer',
      'Accept any settlement offered'
    ],
    correct: 1,
    explanation: 'The cooperation clause requires the insured to assist the insurer in investigating and defending claims. This includes providing documents, attending hearings, and testifying if needed.',
    lessonId: 'cooperation'
  },
  {
    id: 'pp020',
    topic: 'policy-provisions',
    question: 'What is "examination under oath" (EUO)?',
    options: [
      'The licensing exam for agents',
      'A formal, sworn statement taken from the insured during claim investigation',
      'The underwriting process',
      'The appeal process for denied claims'
    ],
    correct: 1,
    explanation: 'Examination under oath is a formal procedure where the insured provides sworn testimony about a claim. It\'s used to investigate potential fraud or verify claim details. Refusal to submit can void coverage.',
    lessonId: 'euo'
  },
  {
    id: 'pp021',
    topic: 'policy-provisions',
    question: 'What is a "binder"?',
    options: [
      'The policy jacket',
      'Temporary evidence of insurance coverage until the policy is issued',
      'The premium invoice',
      'The agent\'s contract with the insurer'
    ],
    correct: 1,
    explanation: 'A binder is temporary proof of insurance that provides coverage until the actual policy is issued. It can be oral or written and typically lasts 30-60 days.',
    lessonId: 'binders'
  },
  {
    id: 'pp022',
    topic: 'policy-provisions',
    question: 'What is the "pro rata liability" clause in insurance?',
    options: [
      'Each insurer pays its proportionate share based on policy limits',
      'The insured pays proportionate premium',
      'Claims are paid at a proportionate rate',
      'The agent receives proportionate commission'
    ],
    correct: 0,
    explanation: 'Pro rata liability means when multiple policies cover the same loss, each insurer pays its proportionate share based on the ratio of its limit to the total of all limits.',
    lessonId: 'other-insurance'
  },
  {
    id: 'pp023',
    topic: 'policy-provisions',
    question: 'What is "primary insurance"?',
    options: [
      'The first policy purchased',
      'Coverage that pays first before other insurance applies',
      'The most expensive policy',
      'Commercial insurance only'
    ],
    correct: 1,
    explanation: 'Primary insurance pays first, up to its limits, before any excess or secondary coverage applies. Other insurance provisions determine which policy is primary.',
    lessonId: 'other-insurance'
  },
  {
    id: 'pp024',
    topic: 'policy-provisions',
    question: 'What is "excess insurance"?',
    options: [
      'Insurance that is not needed',
      'Coverage that pays only after primary insurance limits are exhausted',
      'Insurance with excessive premiums',
      'Coverage for excessive losses'
    ],
    correct: 1,
    explanation: 'Excess insurance provides coverage only after the primary insurance limits are exhausted. It sits above the primary layer and pays for losses exceeding primary limits.',
    lessonId: 'other-insurance'
  },
  {
    id: 'pp025',
    topic: 'policy-provisions',
    question: 'What is the "transfer of rights of recovery" provision?',
    options: [
      'Transferring the policy to another person',
      'Subrogation rights allowing the insurer to pursue third parties',
      'Moving coverage to another property',
      'Transferring premium payments'
    ],
    correct: 1,
    explanation: 'This provision transfers the insured\'s right to recover from responsible third parties to the insurer after a claim is paid (subrogation). The insured cannot impair this right.',
    lessonId: 'subrogation'
  },
  {
    id: 'pp026',
    topic: 'policy-provisions',
    question: 'What is an "assignment" of an insurance policy?',
    options: [
      'The duties of the insured',
      'Transfer of policy rights to another party',
      'The agent\'s territory',
      'The underwriting task'
    ],
    correct: 1,
    explanation: 'Assignment is the transfer of policy rights to another party. Property policies generally cannot be assigned without insurer consent because they\'re personal contracts. However, loss payments can usually be assigned.',
    lessonId: 'assignment'
  },
  {
    id: 'pp027',
    topic: 'policy-provisions',
    question: 'What is the "entire contract" provision?',
    options: [
      'All coverage is included',
      'The policy, declarations, and endorsements constitute the complete agreement',
      'The insured must pay the entire premium upfront',
      'All losses are covered'
    ],
    correct: 1,
    explanation: 'The entire contract provision states that the policy (including declarations, endorsements, and attached forms) constitutes the complete agreement. Oral statements not in the policy are not part of the contract.',
    lessonId: 'entire-contract'
  },
  {
    id: 'pp028',
    topic: 'policy-provisions',
    question: 'What is "waiver"?',
    options: [
      'Signing the application',
      'The voluntary giving up of a known right',
      'The premium discount',
      'The policy exclusions'
    ],
    correct: 1,
    explanation: 'Waiver is the voluntary relinquishment of a known right. If an insurer waives a policy provision (like late premium), they may not later enforce it.',
    lessonId: 'waiver-estoppel'
  },
  {
    id: 'pp029',
    topic: 'policy-provisions',
    question: 'What is "estoppel"?',
    options: [
      'Stopping the policy',
      'Being prevented from denying something previously represented as true',
      'The policy cancellation',
      'The claim denial'
    ],
    correct: 1,
    explanation: 'Estoppel prevents a party from denying something they previously indicated was true, especially if another party relied on that representation. Insurers can be estopped from denying coverage based on their conduct.',
    lessonId: 'waiver-estoppel'
  },
  {
    id: 'pp030',
    topic: 'policy-provisions',
    question: 'What is a "conditional contract"?',
    options: [
      'A contract with no conditions',
      'A contract where the insurer\'s obligations depend on the insured fulfilling certain conditions',
      'A contract that is always void',
      'A contract with conditional premiums'
    ],
    correct: 1,
    explanation: 'Insurance is a conditional contract - the insurer\'s promise to pay depends on the insured meeting policy conditions, such as paying premiums, reporting losses promptly, and cooperating with investigations.',
    lessonId: 'contract-characteristics'
  },

  // ============================================
  // CASUALTY POLICIES & BONDS (15%) - ~30 questions
  // ============================================
  {
    id: 'cp001',
    topic: 'casualty-policies',
    question: 'What does the Commercial General Liability (CGL) policy cover?',
    options: [
      'Damage to the insured\'s own property',
      'Bodily injury and property damage liability arising from business operations',
      'Workers compensation claims',
      'Professional errors'
    ],
    correct: 1,
    explanation: 'The CGL covers bodily injury and property damage liability, personal and advertising injury liability, and medical payments arising from business operations, products, or premises.',
    lessonId: 'cgl'
  },
  {
    id: 'cp002',
    topic: 'casualty-policies',
    question: 'What are the two main coverage forms for CGL policies?',
    options: [
      'Named perils and open perils',
      'Occurrence and claims-made',
      'Primary and excess',
      'Basic and broad'
    ],
    correct: 1,
    explanation: 'CGL policies are written on either occurrence form (covers incidents during policy period) or claims-made form (covers claims reported during policy period).',
    lessonId: 'cgl'
  },
  {
    id: 'cp003',
    topic: 'casualty-policies',
    question: 'Coverage A of the CGL policy covers:',
    options: [
      'Personal and advertising injury',
      'Medical payments',
      'Bodily injury and property damage liability',
      'Products and completed operations'
    ],
    correct: 2,
    explanation: 'Coverage A of the CGL covers bodily injury and property damage liability. Coverage B covers personal and advertising injury. Coverage C covers medical payments.',
    lessonId: 'cgl'
  },
  {
    id: 'cp004',
    topic: 'casualty-policies',
    question: 'What is "products-completed operations" coverage?',
    options: [
      'Coverage for products in inventory',
      'Liability for injury/damage caused by products sold or work completed away from premises',
      'Coverage for unfinished projects',
      'Product warranty coverage'
    ],
    correct: 1,
    explanation: 'Products-completed operations covers liability for bodily injury or property damage arising from products manufactured/sold or work completed by the insured away from their premises.',
    lessonId: 'products-operations'
  },
  {
    id: 'cp005',
    topic: 'casualty-policies',
    question: 'What is "personal and advertising injury" under CGL Coverage B?',
    options: [
      'Physical injury from advertising',
      'Offenses like libel, slander, false arrest, and copyright infringement in advertising',
      'Personal auto injury',
      'Bodily injury from products'
    ],
    correct: 1,
    explanation: 'Personal and advertising injury includes libel, slander, false arrest, wrongful eviction, malicious prosecution, invasion of privacy, and copyright infringement in advertising.',
    lessonId: 'cgl'
  },
  {
    id: 'cp006',
    topic: 'casualty-policies',
    question: 'What does Workers Compensation insurance cover?',
    options: [
      'Liability for defective products',
      'Medical expenses and lost wages for employees injured on the job',
      'Damage to company vehicles',
      'Professional errors by employees'
    ],
    correct: 1,
    explanation: 'Workers Compensation covers medical expenses, disability benefits, rehabilitation costs, and lost wages for employees who suffer work-related injuries or illnesses, regardless of fault.',
    lessonId: 'workers-comp'
  },
  {
    id: 'cp007',
    topic: 'casualty-policies',
    question: 'What is "Employers Liability" coverage (Part Two of workers comp)?',
    options: [
      'Coverage for employee theft',
      'Coverage for lawsuits by employees not covered under workers comp statutes',
      'Liability for hiring practices',
      'Coverage for employee benefits'
    ],
    correct: 1,
    explanation: 'Employers Liability covers lawsuits by employees (or their families) for work-related injuries not covered by workers compensation statutes, such as "dual capacity" claims or third-party-over actions.',
    lessonId: 'workers-comp'
  },
  {
    id: 'cp008',
    topic: 'casualty-policies',
    question: 'What is "professional liability" (Errors & Omissions) insurance?',
    options: [
      'Coverage for product defects',
      'Coverage for negligent acts or omissions in providing professional services',
      'General liability for professionals',
      'Workers compensation for professionals'
    ],
    correct: 1,
    explanation: 'Professional liability (E&O) covers claims arising from negligent acts, errors, or omissions in providing professional services. It\'s essential for doctors, lawyers, accountants, agents, etc.',
    lessonId: 'professional-liability'
  },
  {
    id: 'cp009',
    topic: 'casualty-policies',
    question: 'What is an "umbrella liability" policy?',
    options: [
      'Coverage for rain damage',
      'Excess liability coverage that provides higher limits over underlying policies',
      'Basic liability coverage',
      'Coverage for outdoor events'
    ],
    correct: 1,
    explanation: 'An umbrella policy provides excess liability coverage above underlying policies (auto, CGL, employers liability) and may also provide drop-down coverage for some claims not covered by underlying policies.',
    lessonId: 'umbrella'
  },
  {
    id: 'cp010',
    topic: 'casualty-policies',
    question: 'What is the difference between an umbrella policy and an excess policy?',
    options: [
      'They are the same',
      'An umbrella may provide drop-down coverage; pure excess only pays above underlying limits',
      'An umbrella is cheaper',
      'An umbrella covers property; excess covers liability'
    ],
    correct: 1,
    explanation: 'An umbrella policy may provide broader coverage and "drop down" to cover claims not covered by underlying policies. A pure excess policy only pays after underlying limits are exhausted, with no broader coverage.',
    lessonId: 'umbrella'
  },
  {
    id: 'cp011',
    topic: 'casualty-policies',
    question: 'What is a "Businessowners Policy" (BOP)?',
    options: [
      'A policy for large corporations only',
      'A package policy combining property and liability coverage for small-medium businesses',
      'Workers compensation for business owners',
      'Auto coverage for business vehicles'
    ],
    correct: 1,
    explanation: 'A BOP is a package policy that combines property and general liability coverage in one policy for eligible small-to-medium businesses. It\'s simpler and often more cost-effective than separate policies.',
    lessonId: 'bop'
  },
  {
    id: 'cp012',
    topic: 'casualty-policies',
    question: 'What is a "surety bond"?',
    options: [
      'A loan guarantee',
      'A three-party agreement guaranteeing performance or payment',
      'Property insurance',
      'Life insurance'
    ],
    correct: 1,
    explanation: 'A surety bond involves three parties: principal (who must perform), obligee (who is protected), and surety (who guarantees performance). If the principal fails, the surety pays the obligee.',
    lessonId: 'surety-bonds'
  },
  {
    id: 'cp013',
    topic: 'casualty-policies',
    question: 'What is the difference between a surety bond and insurance?',
    options: [
      'No difference',
      'Insurance expects losses; surety does not expect to pay and can recover from the principal',
      'Bonds are more expensive',
      'Insurance covers three parties'
    ],
    correct: 1,
    explanation: 'Unlike insurance (which expects to pay claims), a surety does not expect losses. If the surety must pay, it has the right to recover from the principal. Bonds guarantee performance, not just pay for losses.',
    lessonId: 'surety-bonds'
  },
  {
    id: 'cp014',
    topic: 'casualty-policies',
    question: 'What is a "fidelity bond"?',
    options: [
      'A bond for construction projects',
      'A bond that protects against employee dishonesty and theft',
      'A government savings bond',
      'A court-required bond'
    ],
    correct: 1,
    explanation: 'A fidelity bond protects an employer against losses caused by dishonest acts of employees, such as theft, embezzlement, or fraud.',
    lessonId: 'fidelity-bonds'
  },
  {
    id: 'cp015',
    topic: 'casualty-policies',
    question: 'What is a "performance bond"?',
    options: [
      'A bond guaranteeing employee performance reviews',
      'A bond guaranteeing a contractor will complete a project as specified',
      'A bond for entertainers',
      'An athletic performance guarantee'
    ],
    correct: 1,
    explanation: 'A performance bond guarantees that a contractor will complete a project according to contract specifications. If the contractor fails, the surety either completes the work or pays damages.',
    lessonId: 'surety-bonds'
  },
  {
    id: 'cp016',
    topic: 'casualty-policies',
    question: 'What is a "payment bond"?',
    options: [
      'A bond guaranteeing insurance premium payment',
      'A bond guaranteeing a contractor will pay subcontractors and suppliers',
      'A loan payment guarantee',
      'A monthly payment plan'
    ],
    correct: 1,
    explanation: 'A payment bond guarantees that a contractor will pay subcontractors, laborers, and material suppliers. It protects the project owner from mechanic\'s liens.',
    lessonId: 'surety-bonds'
  },
  {
    id: 'cp017',
    topic: 'casualty-policies',
    question: 'What is "bailee coverage"?',
    options: [
      'Coverage for bail bonds',
      'Coverage for property of others in the insured\'s care, custody, or control',
      'Coverage for jail facilities',
      'Coverage for watercraft'
    ],
    correct: 1,
    explanation: 'Bailee coverage protects a business that has temporary possession of others\' property (dry cleaners, repair shops, storage facilities) against loss or damage to customers\' goods.',
    lessonId: 'bailee'
  },
  {
    id: 'cp018',
    topic: 'casualty-policies',
    question: 'What is "vicarious liability"?',
    options: [
      'Liability for your own actions',
      'Liability imposed on one party for the actions of another',
      'Strict liability',
      'Contractual liability'
    ],
    correct: 1,
    explanation: 'Vicarious liability holds one party responsible for another\'s actions due to a legal relationship. Examples: employers liable for employees\' negligence, parents liable for minor children.',
    lessonId: 'vicarious-liability'
  },
  {
    id: 'cp019',
    topic: 'casualty-policies',
    question: 'What is "strict liability" (absolute liability)?',
    options: [
      'Liability requiring proof of negligence',
      'Liability without requiring proof of negligence or fault',
      'Liability with strict limits',
      'Liability with high deductibles'
    ],
    correct: 1,
    explanation: 'Strict liability imposes responsibility without proof of negligence or fault. It applies to inherently dangerous activities (explosives, wild animals) and defective products in some jurisdictions.',
    lessonId: 'strict-liability'
  },
  {
    id: 'cp020',
    topic: 'casualty-policies',
    question: 'What is "contractual liability"?',
    options: [
      'Liability written in a contract',
      'Liability assumed by contract that would not otherwise exist',
      'Liability for breach of contract',
      'The insurance contract'
    ],
    correct: 1,
    explanation: 'Contractual liability is liability assumed through a contract, such as hold harmless or indemnification agreements. CGL policies cover some contractual liability but have limitations.',
    lessonId: 'contractual-liability'
  },

  // ============================================
  // MOTOR VEHICLE & PHYSICAL DAMAGE (15%) - ~30 questions
  // ============================================
  {
    id: 'mv001',
    topic: 'motor-vehicle',
    question: 'What does Part A of the Personal Auto Policy (PAP) cover?',
    options: [
      'Medical payments',
      'Liability coverage for bodily injury and property damage',
      'Collision coverage',
      'Uninsured motorist coverage'
    ],
    correct: 1,
    explanation: 'Part A - Liability Coverage provides bodily injury and property damage liability protection when the insured is legally responsible for an auto accident.',
    lessonId: 'pap'
  },
  {
    id: 'mv002',
    topic: 'motor-vehicle',
    question: 'What does Part B of the Personal Auto Policy cover?',
    options: [
      'Liability coverage',
      'Medical Payments coverage',
      'Collision coverage',
      'Comprehensive coverage'
    ],
    correct: 1,
    explanation: 'Part B - Medical Payments covers medical expenses for the insured and passengers injured in an auto accident, regardless of fault.',
    lessonId: 'pap'
  },
  {
    id: 'mv003',
    topic: 'motor-vehicle',
    question: 'What does Part C of the Personal Auto Policy cover?',
    options: [
      'Collision damage',
      'Uninsured/Underinsured Motorist coverage',
      'Medical payments',
      'Liability coverage'
    ],
    correct: 1,
    explanation: 'Part C - Uninsured Motorist (UM) and Underinsured Motorist (UIM) coverage pays for injuries caused by drivers without insurance or with insufficient coverage.',
    lessonId: 'pap'
  },
  {
    id: 'mv004',
    topic: 'motor-vehicle',
    question: 'What does Part D of the Personal Auto Policy cover?',
    options: [
      'Liability coverage',
      'Damage to Your Auto (physical damage)',
      'Medical payments',
      'Uninsured motorist'
    ],
    correct: 1,
    explanation: 'Part D - Damage to Your Auto provides comprehensive and collision coverage for physical damage to the insured vehicle.',
    lessonId: 'pap'
  },
  {
    id: 'mv005',
    topic: 'motor-vehicle',
    question: 'What is the difference between "collision" and "comprehensive" coverage?',
    options: [
      'They are the same',
      'Collision covers impact with objects/vehicles; comprehensive covers other perils like theft, fire, vandalism',
      'Comprehensive covers collision; collision covers theft',
      'Collision is mandatory; comprehensive is optional'
    ],
    correct: 1,
    explanation: 'Collision covers damage from impact with another vehicle or object. Comprehensive (Other Than Collision) covers damage from other perils: theft, fire, vandalism, flood, hail, animals, etc.',
    lessonId: 'physical-damage'
  },
  {
    id: 'mv006',
    topic: 'motor-vehicle',
    question: 'Who is an "insured" under the PAP liability coverage?',
    options: [
      'Only the named insured',
      'Named insured, family members, and permissive users of the covered auto',
      'Anyone who drives the car',
      'Only licensed drivers'
    ],
    correct: 1,
    explanation: 'PAP liability covers: (1) Named insured and family members for any auto, (2) Anyone using the covered auto with permission, (3) Persons/organizations liable for named insured\'s use of any auto.',
    lessonId: 'pap'
  },
  {
    id: 'mv007',
    topic: 'motor-vehicle',
    question: 'What is PIP (Personal Injury Protection) coverage?',
    options: [
      'Coverage for vehicle damage',
      'No-fault coverage for medical expenses, lost wages, and essential services regardless of fault',
      'Liability coverage only',
      'Uninsured motorist coverage'
    ],
    correct: 1,
    explanation: 'PIP is no-fault coverage that pays medical expenses, lost wages, replacement services, and death benefits for the insured and passengers, regardless of who caused the accident.',
    lessonId: 'pip-florida'
  },
  {
    id: 'mv008',
    topic: 'motor-vehicle',
    question: 'In Florida, what is the minimum required PIP coverage?',
    options: [
      '$5,000',
      '$10,000',
      '$25,000',
      '$50,000'
    ],
    correct: 1,
    explanation: 'Florida requires minimum $10,000 PIP coverage. PIP pays 80% of medical expenses and 60% of lost wages, subject to the $10,000 limit.',
    lessonId: 'pip-florida'
  },
  {
    id: 'mv009',
    topic: 'motor-vehicle',
    question: 'In Florida, what is the minimum required Property Damage Liability (PDL) coverage?',
    options: [
      '$5,000',
      '$10,000',
      '$25,000',
      '$50,000'
    ],
    correct: 1,
    explanation: 'Florida requires minimum $10,000 Property Damage Liability. Note: Florida does NOT require Bodily Injury Liability for registration, making it a "no-fault" state.',
    lessonId: 'florida-auto'
  },
  {
    id: 'mv010',
    topic: 'motor-vehicle',
    question: 'What is "stacking" of Uninsured Motorist coverage?',
    options: [
      'Piling up damaged vehicles',
      'Combining UM limits from multiple vehicles or policies to increase available coverage',
      'Stacking deductibles',
      'Adding multiple drivers'
    ],
    correct: 1,
    explanation: 'Stacking allows combining UM limits from multiple vehicles on a policy or multiple policies to increase available coverage. Insureds in Florida can choose stacked or non-stacked UM.',
    lessonId: 'stacking'
  },
  {
    id: 'mv011',
    topic: 'motor-vehicle',
    question: 'What is the Business Auto Coverage Form used for?',
    options: [
      'Personal vehicles only',
      'Covering autos used in business operations',
      'Commercial property',
      'Workers compensation'
    ],
    correct: 1,
    explanation: 'The Business Auto Coverage Form (BAP) provides liability and physical damage coverage for vehicles used in business operations, including owned, hired, and non-owned autos.',
    lessonId: 'business-auto'
  },
  {
    id: 'mv012',
    topic: 'motor-vehicle',
    question: 'What is "hired auto" coverage?',
    options: [
      'Coverage for chauffeurs',
      'Coverage for autos rented or borrowed for business use',
      'Coverage for taxi services',
      'Coverage for company-owned vehicles'
    ],
    correct: 1,
    explanation: 'Hired auto coverage applies to vehicles rented, leased, hired, or borrowed for business purposes (not owned by the business). It provides liability and sometimes physical damage coverage.',
    lessonId: 'business-auto'
  },
  {
    id: 'mv013',
    topic: 'motor-vehicle',
    question: 'What is "non-owned auto" liability coverage?',
    options: [
      'Coverage for stolen vehicles',
      'Coverage for liability when employees use their personal vehicles for business',
      'Coverage for company-owned vehicles',
      'Coverage for leased vehicles'
    ],
    correct: 1,
    explanation: 'Non-owned auto coverage provides liability protection when employees or others use vehicles they don\'t own (like personal cars) while conducting business on behalf of the insured.',
    lessonId: 'business-auto'
  },
  {
    id: 'mv014',
    topic: 'motor-vehicle',
    question: 'What does "garage liability" insurance cover?',
    options: [
      'Residential garages',
      'Liability arising from auto dealership, repair shop, or service station operations',
      'Parking garages only',
      'Storage facilities'
    ],
    correct: 1,
    explanation: 'Garage liability covers businesses like auto dealers, repair shops, and service stations for liability arising from their premises and auto-related operations.',
    lessonId: 'garage'
  },
  {
    id: 'mv015',
    topic: 'motor-vehicle',
    question: 'What is "garagekeepers coverage"?',
    options: [
      'Property coverage for the garage building',
      'Coverage for damage to customers\' vehicles in the insured\'s care',
      'Liability for garage operations',
      'Workers compensation for garage employees'
    ],
    correct: 1,
    explanation: 'Garagekeepers coverage pays for damage to customers\' vehicles while in the care, custody, or control of an auto service business (repair shop, valet, parking garage).',
    lessonId: 'garage'
  },
  {
    id: 'mv016',
    topic: 'motor-vehicle',
    question: 'What is "split limits" auto liability coverage?',
    options: [
      'Coverage divided between two vehicles',
      'Separate limits for bodily injury per person, per accident, and property damage',
      'Coverage split between insurers',
      'Deductibles split in half'
    ],
    correct: 1,
    explanation: 'Split limits show three numbers (e.g., 100/300/100): bodily injury per person ($100K), bodily injury per accident ($300K), and property damage per accident ($100K).',
    lessonId: 'auto-limits'
  },
  {
    id: 'mv017',
    topic: 'motor-vehicle',
    question: 'What is a "combined single limit" (CSL) for auto liability?',
    options: [
      'One premium for all coverage',
      'One limit that applies to all bodily injury and property damage per accident',
      'Combined coverage for all vehicles',
      'A limit combining collision and comprehensive'
    ],
    correct: 1,
    explanation: 'A combined single limit (CSL) provides one total limit for all bodily injury and property damage liability per accident, rather than separate limits for each.',
    lessonId: 'auto-limits'
  },
  {
    id: 'mv018',
    topic: 'motor-vehicle',
    question: 'What is "transportation expense" coverage in auto insurance?',
    options: [
      'Coverage for transportation businesses',
      'Reimbursement for rental car or other transport while covered auto is being repaired',
      'Coverage for transporting goods',
      'Commuting expense coverage'
    ],
    correct: 1,
    explanation: 'Transportation expense (rental reimbursement) coverage pays for a rental car or other transportation while your covered auto is being repaired due to a covered loss.',
    lessonId: 'auto-additional'
  },
  {
    id: 'mv019',
    topic: 'motor-vehicle',
    question: 'What is "towing and labor" coverage?',
    options: [
      'Coverage for tow truck companies',
      'Pays for towing and on-site labor costs when vehicle is disabled',
      'Coverage for labor unions',
      'Roadside assistance for employees'
    ],
    correct: 1,
    explanation: 'Towing and labor coverage pays for towing charges and on-site labor (like changing a tire or jump-starting) when a covered vehicle breaks down or is disabled.',
    lessonId: 'auto-additional'
  },
  {
    id: 'mv020',
    topic: 'motor-vehicle',
    question: 'Under Florida law, how long does an insured have to seek initial treatment under PIP?',
    options: [
      '7 days',
      '14 days',
      '30 days',
      '60 days'
    ],
    correct: 1,
    explanation: 'Under Florida law, PIP benefits are only available if the insured seeks initial medical treatment within 14 days of the accident. This is a strict deadline.',
    lessonId: 'pip-florida'
  },

  // ============================================
  // FLORIDA STATUTES & RULES (11%) - ~25 questions
  // ============================================
  {
    id: 'fs001',
    topic: 'florida-statutes',
    question: 'What is FIGA (Florida Insurance Guaranty Association)?',
    options: [
      'A state insurance company',
      'An association that pays claims when insurance companies become insolvent',
      'The state insurance regulator',
      'A trade association for agents'
    ],
    correct: 1,
    explanation: 'FIGA is a statutory organization that pays covered claims when property and casualty insurers become insolvent. It\'s funded by assessments on member insurers.',
    lessonId: 'figa'
  },
  {
    id: 'fs002',
    topic: 'florida-statutes',
    question: 'What is the maximum claim payment FIGA will make for most property and casualty claims?',
    options: [
      '$100,000',
      '$300,000',
      '$500,000',
      '$1,000,000'
    ],
    correct: 1,
    explanation: 'FIGA\'s maximum payment for most claims is $300,000 per claim. There are some exceptions and limitations based on claim type.',
    lessonId: 'figa'
  },
  {
    id: 'fs003',
    topic: 'florida-statutes',
    question: 'What Florida statute chapter covers insurance agents and adjusters?',
    options: [
      'Chapter 624',
      'Chapter 626',
      'Chapter 627',
      'Chapter 629'
    ],
    correct: 1,
    explanation: 'Chapter 626 of the Florida Statutes covers insurance field representatives and operations, including agent licensing, conduct, and disciplinary actions.',
    lessonId: 'chapter-626'
  },
  {
    id: 'fs004',
    topic: 'florida-statutes',
    question: 'What Florida statute chapter covers insurance rates and contracts?',
    options: [
      'Chapter 624',
      'Chapter 626',
      'Chapter 627',
      'Chapter 629'
    ],
    correct: 2,
    explanation: 'Chapter 627 of the Florida Statutes covers insurance rates, rating organizations, and insurance contracts, including policy forms and coverage requirements.',
    lessonId: 'chapter-627'
  },
  {
    id: 'fs005',
    topic: 'florida-statutes',
    question: 'An insurance adjuster in Florida must be licensed:',
    options: [
      'Only if handling claims over $10,000',
      'For all property and casualty claims',
      'Only for auto claims',
      'Only if employed by an insurer'
    ],
    correct: 1,
    explanation: 'In Florida, all persons who investigate, negotiate, or settle property and casualty insurance claims must hold an adjuster license, with limited exceptions.',
    lessonId: 'adjuster-licensing'
  },
  {
    id: 'fs006',
    topic: 'florida-statutes',
    question: 'What is the penalty in Florida for acting as an insurance agent without a license?',
    options: [
      'Warning letter',
      'Misdemeanor only',
      'Third-degree felony',
      'Fine only, no criminal charges'
    ],
    correct: 2,
    explanation: 'Acting as an insurance agent without a license in Florida is a third-degree felony, punishable by up to 5 years in prison and/or fines up to $5,000.',
    lessonId: 'unlicensed-activity'
  },
  {
    id: 'fs007',
    topic: 'florida-statutes',
    question: 'What is "twisting" under Florida insurance law?',
    options: [
      'Binding coverage without authority',
      'Inducing an insured to replace existing insurance through misrepresentation',
      'Overcharging for premiums',
      'Refusing to pay claims'
    ],
    correct: 1,
    explanation: 'Twisting is the practice of inducing an insured to replace existing insurance by misrepresenting the terms or conditions of policies. It\'s a prohibited practice.',
    lessonId: 'prohibited-practices'
  },
  {
    id: 'fs008',
    topic: 'florida-statutes',
    question: 'What is "churning" in insurance?',
    options: [
      'Excessive policy changes to generate commissions',
      'Mixing insurance premiums',
      'Processing claims quickly',
      'Annual policy reviews'
    ],
    correct: 0,
    explanation: 'Churning is the practice of inducing insureds to make unnecessary policy replacements or changes to generate additional commissions. It\'s prohibited.',
    lessonId: 'prohibited-practices'
  },
  {
    id: 'fs009',
    topic: 'florida-statutes',
    question: 'What is "rebating" under Florida insurance law?',
    options: [
      'Reducing claims payments',
      'Giving part of the agent\'s commission or other inducement to the insured',
      'Offering discounts for multiple policies',
      'Returning unused premium'
    ],
    correct: 1,
    explanation: 'Rebating is offering or giving anything of value not specified in the policy as an inducement to purchase insurance. It\'s prohibited in Florida with limited exceptions.',
    lessonId: 'prohibited-practices'
  },
  {
    id: 'fs010',
    topic: 'florida-statutes',
    question: 'How many hours of continuing education must a Florida 2-20 General Lines agent complete every two years?',
    options: [
      '12 hours',
      '24 hours',
      '30 hours',
      '40 hours'
    ],
    correct: 1,
    explanation: 'Florida General Lines (2-20) agents must complete 24 hours of continuing education every two years, including required hours in ethics and Florida laws.',
    lessonId: 'continuing-education'
  },
  {
    id: 'fs011',
    topic: 'florida-statutes',
    question: 'What is the "unfair claims settlement practices" law designed to prevent?',
    options: [
      'High premiums',
      'Improper claim handling such as delays, lowballing, and bad faith',
      'Agent licensing violations',
      'Rate discrimination'
    ],
    correct: 1,
    explanation: 'Unfair claims settlement practices laws prohibit insurers from misrepresenting coverage, failing to acknowledge claims promptly, denying claims without investigation, and other bad faith practices.',
    lessonId: 'unfair-practices'
  },
  {
    id: 'fs012',
    topic: 'florida-statutes',
    question: 'In Florida, an insurance company must acknowledge receipt of a claim within:',
    options: [
      '7 days',
      '14 days',
      '30 days',
      '60 days'
    ],
    correct: 1,
    explanation: 'Florida law requires insurers to acknowledge receipt of a claim within 14 days, begin investigation within 10 days, and pay or deny the claim within 90 days of receiving proof of loss.',
    lessonId: 'claims-handling'
  },
  {
    id: 'fs013',
    topic: 'florida-statutes',
    question: 'In Florida, what is the deadline for an insurer to pay or deny a claim after receiving a complete proof of loss?',
    options: [
      '30 days',
      '60 days',
      '90 days',
      '120 days'
    ],
    correct: 2,
    explanation: 'Florida insurers must pay or deny claims within 90 days after receiving a complete proof of loss. Failure to do so may constitute an unfair claims practice.',
    lessonId: 'claims-handling'
  },
  {
    id: 'fs014',
    topic: 'florida-statutes',
    question: 'What is "sinkhole coverage" in Florida?',
    options: [
      'Always included in all policies',
      'Coverage for damage caused by sinkhole activity, which insurers must offer',
      'Only available through Citizens',
      'Not available in Florida'
    ],
    correct: 1,
    explanation: 'Florida requires insurers to offer sinkhole coverage. Catastrophic ground cover collapse is automatically covered, but full sinkhole coverage (including settling) is optional and requires additional premium.',
    lessonId: 'florida-coverages'
  },
  {
    id: 'fs015',
    topic: 'florida-statutes',
    question: 'What is the difference between "sinkhole loss" and "catastrophic ground cover collapse" in Florida?',
    options: [
      'They are the same thing',
      'Sinkhole loss is broader; catastrophic collapse requires more severe structural damage',
      'Catastrophic collapse is broader coverage',
      'Sinkhole loss applies to commercial only'
    ],
    correct: 1,
    explanation: 'Catastrophic ground cover collapse requires actual structural damage making the building uninhabitable. Sinkhole loss coverage is broader, covering settling and cracking even without total structural damage.',
    lessonId: 'florida-coverages'
  },
  {
    id: 'fs016',
    topic: 'florida-statutes',
    question: 'In Florida, can an insurer refuse to renew homeowners insurance solely because the roof is over 15 years old?',
    options: [
      'Yes, always',
      'No, if the roof has at least 5 years of useful life remaining or passes inspection',
      'Only for shingle roofs',
      'Only in hurricane zones'
    ],
    correct: 1,
    explanation: 'Florida law prohibits non-renewal solely based on roof age if the roof has at least 5 years of remaining useful life or a licensed inspector certifies it will function for at least 3 more years.',
    lessonId: 'florida-rules'
  },
  {
    id: 'fs017',
    topic: 'florida-statutes',
    question: 'What is the Florida Hurricane Catastrophe Fund (FHCF)?',
    options: [
      'A hurricane relief charity',
      'A state-run reinsurance fund for residential property insurers',
      'A federal disaster fund',
      'An insurance company'
    ],
    correct: 1,
    explanation: 'The FHCF is a state trust fund that provides reinsurance to insurers writing residential property coverage in Florida, helping them manage hurricane exposure.',
    lessonId: 'fhcf'
  },
  {
    id: 'fs018',
    topic: 'florida-statutes',
    question: 'What is "bad faith" in insurance claims handling?',
    options: [
      'Religious discrimination',
      'Unreasonable failure to settle or pay a valid claim',
      'Selling too many policies',
      'Overcharging premiums'
    ],
    correct: 1,
    explanation: 'Bad faith occurs when an insurer unreasonably denies, delays, or underpays valid claims, or fails to properly investigate. Insurers can be sued for damages beyond policy limits for bad faith.',
    lessonId: 'bad-faith'
  },
  {
    id: 'fs019',
    topic: 'florida-statutes',
    question: 'What is "controlled business" in Florida insurance?',
    options: [
      'Business from a large corporation',
      'Insurance written primarily on the agent\'s own risks, family, or business',
      'Government insurance programs',
      'Mandatory coverage'
    ],
    correct: 1,
    explanation: 'Controlled business refers to insurance written primarily on the agent\'s own risks, family, employer, or business associates. Excessive controlled business can be grounds for license action.',
    lessonId: 'controlled-business'
  },
  {
    id: 'fs020',
    topic: 'florida-statutes',
    question: 'What fiduciary duty does an insurance agent owe regarding premium funds?',
    options: [
      'None, premiums belong to the agent',
      'Must hold premium funds in trust and remit to the insurer promptly',
      'Can use premiums for personal expenses',
      'Only owes duty to the insured'
    ],
    correct: 1,
    explanation: 'Agents have a fiduciary duty to hold premium funds in trust and promptly remit them to the insurer. Misappropriating premium funds is a serious offense that can result in license revocation and criminal charges.',
    lessonId: 'fiduciary-duty'
  },

  // ============================================
  // AGENT & AGENCY LICENSING (8%) - ~20 questions
  // ============================================
  {
    id: 'al001',
    topic: 'agent-licensing',
    question: 'What license is required to sell property and casualty insurance in Florida?',
    options: [
      '2-14 Life Agent',
      '2-15 Health Agent',
      '2-20 General Lines Agent',
      '4-40 Customer Representative'
    ],
    correct: 2,
    explanation: 'The 2-20 General Lines license allows agents to sell all property and casualty insurance lines in Florida, including auto, homeowners, commercial, and workers compensation.',
    lessonId: 'license-types'
  },
  {
    id: 'al002',
    topic: 'agent-licensing',
    question: 'What are the requirements to obtain a 2-20 General Lines license in Florida?',
    options: [
      'Pass the exam only',
      '200 hours of pre-licensing education and pass the state exam',
      '100 hours of education',
      'Work for an insurance company for one year'
    ],
    correct: 1,
    explanation: 'To obtain a 2-20 license, applicants must complete 200 hours of approved pre-licensing education (including 40 hours of property, 40 hours of casualty, and ethics) and pass the state exam.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al003',
    topic: 'agent-licensing',
    question: 'What is an insurance agent "appointment"?',
    options: [
      'A meeting with a client',
      'Authorization from an insurer to represent them and sell their products',
      'The licensing exam time',
      'A disciplinary hearing'
    ],
    correct: 1,
    explanation: 'An appointment is the authorization an insurer gives an agent to represent them and sell their products. Agents must be appointed by each insurer they represent.',
    lessonId: 'appointments'
  },
  {
    id: 'al004',
    topic: 'agent-licensing',
    question: 'Within how many days must an insurer file an appointment for a new agent with the state?',
    options: [
      '7 days',
      '15 days',
      '30 days',
      '60 days'
    ],
    correct: 1,
    explanation: 'Insurers must file an appointment with the Department of Financial Services within 15 days of the agent\'s first transaction with that insurer.',
    lessonId: 'appointments'
  },
  {
    id: 'al005',
    topic: 'agent-licensing',
    question: 'What is an insurance "agency"?',
    options: [
      'A government office',
      'A business entity licensed to transact insurance through appointed agents',
      'An individual agent',
      'An insurance company'
    ],
    correct: 1,
    explanation: 'An insurance agency is a business entity (corporation, partnership, LLC) licensed to transact insurance. Agencies must have at least one licensed agent and be separately licensed.',
    lessonId: 'agency-licensing'
  },
  {
    id: 'al006',
    topic: 'agent-licensing',
    question: 'What is "express authority" of an insurance agent?',
    options: [
      'Authority to drive fast',
      'Authority specifically granted in writing by the insurer',
      'Authority to decline claims',
      'Authority assumed by the public'
    ],
    correct: 1,
    explanation: 'Express authority is power specifically granted to the agent in writing, usually through the agency contract. It explicitly states what the agent can and cannot do.',
    lessonId: 'agent-authority'
  },
  {
    id: 'al007',
    topic: 'agent-licensing',
    question: 'What is "implied authority" of an insurance agent?',
    options: [
      'Authority to accept bribes',
      'Authority not expressly granted but reasonably necessary to perform express duties',
      'Authority to bind all risks',
      'Authority that must be in writing'
    ],
    correct: 1,
    explanation: 'Implied authority is power not specifically granted but reasonably assumed necessary to carry out express duties. For example, authority to accept premium payments.',
    lessonId: 'agent-authority'
  },
  {
    id: 'al008',
    topic: 'agent-licensing',
    question: 'What is "apparent authority" of an insurance agent?',
    options: [
      'Authority that doesn\'t really exist',
      'Authority the public reasonably believes the agent has based on the insurer\'s actions',
      'Authority granted by the state',
      'Authority for emergency situations'
    ],
    correct: 1,
    explanation: 'Apparent authority exists when the insurer\'s conduct leads the public to reasonably believe the agent has certain powers, even if not actually authorized. The insurer can be bound by such actions.',
    lessonId: 'agent-authority'
  },
  {
    id: 'al009',
    topic: 'agent-licensing',
    question: 'What is a "surplus lines" or "non-admitted" carrier?',
    options: [
      'An insurer with too much money',
      'An insurer not licensed in the state but allowed to write hard-to-place risks',
      'A foreign insurer',
      'A reinsurance company'
    ],
    correct: 1,
    explanation: 'Surplus lines insurers are not licensed (admitted) in the state but are allowed to write hard-to-place risks that admitted carriers won\'t cover. They\'re regulated but have less state oversight.',
    lessonId: 'surplus-lines'
  },
  {
    id: 'al010',
    topic: 'agent-licensing',
    question: 'What special license is required to place business with surplus lines carriers in Florida?',
    options: [
      '2-20 General Lines',
      'Surplus Lines License',
      '4-40 Customer Representative',
      'No special license needed'
    ],
    correct: 1,
    explanation: 'A Surplus Lines License is required to place insurance with non-admitted carriers. The agent must demonstrate that coverage cannot be obtained from admitted insurers.',
    lessonId: 'surplus-lines'
  },
  {
    id: 'al011',
    topic: 'agent-licensing',
    question: 'What grounds can result in suspension or revocation of an insurance license in Florida?',
    options: [
      'Only felony convictions',
      'Fraud, misrepresentation, unfair practices, or felony convictions',
      'Only failure to pay licensing fees',
      'Changing addresses without notice'
    ],
    correct: 1,
    explanation: 'Licenses can be suspended or revoked for fraud, misrepresentation, untrustworthiness, unfair practices, felony convictions, violating insurance laws, and other causes specified in Chapter 626.',
    lessonId: 'license-discipline'
  },
  {
    id: 'al012',
    topic: 'agent-licensing',
    question: 'An agent must notify the Department of Financial Services of an address change within:',
    options: [
      '10 days',
      '30 days',
      '60 days',
      '90 days'
    ],
    correct: 1,
    explanation: 'Licensed agents must notify the Department of Financial Services of any address change within 30 days of the change.',
    lessonId: 'license-maintenance'
  },
  {
    id: 'al013',
    topic: 'agent-licensing',
    question: 'What is a "Customer Representative" (4-40) license in Florida?',
    options: [
      'A full agent license',
      'A limited license allowing clerical functions under agent supervision',
      'A claims adjuster license',
      'An insurance company employee license'
    ],
    correct: 1,
    explanation: 'A 4-40 Customer Representative license allows limited functions (quoting, collecting premiums, processing endorsements) under the direct supervision of a licensed agent.',
    lessonId: 'license-types'
  },
  {
    id: 'al014',
    topic: 'agent-licensing',
    question: 'What is "commingling" of funds and why is it prohibited?',
    options: [
      'Mixing different insurance lines',
      'Mixing premium funds with personal or agency funds',
      'Combining policies',
      'Sharing commissions'
    ],
    correct: 1,
    explanation: 'Commingling is mixing client premium funds with personal or agency operating funds. It\'s prohibited because premium funds must be held in trust for insurers and properly accounted for.',
    lessonId: 'fiduciary-duty'
  },
  {
    id: 'al015',
    topic: 'agent-licensing',
    question: 'If an agent\'s license is revoked, how long before they can reapply?',
    options: [
      '6 months',
      '1 year',
      '2 years',
      '5 years'
    ],
    correct: 2,
    explanation: 'In Florida, if a license is revoked, the person typically cannot reapply for at least 2 years. The Department has discretion based on the nature of the offense.',
    lessonId: 'license-discipline'
  },

  // ============================================
  // RESIDUAL MARKETS (2%) - ~5 questions
  // ============================================
  {
    id: 'rm001',
    topic: 'residual-markets',
    question: 'What is Citizens Property Insurance Corporation?',
    options: [
      'A private insurance company',
      'Florida\'s state-created insurer of last resort for property insurance',
      'A federal flood program',
      'A surplus lines carrier'
    ],
    correct: 1,
    explanation: 'Citizens is Florida\'s state-created, not-for-profit insurer of last resort for homeowners who cannot obtain coverage in the private market. It\'s designed to provide coverage, not compete with private insurers.',
    lessonId: 'citizens'
  },
  {
    id: 'rm002',
    topic: 'residual-markets',
    question: 'To be eligible for Citizens coverage, an applicant generally must:',
    options: [
      'Be a Florida resident',
      'Be unable to obtain comparable coverage from a private insurer',
      'Own a property worth over $1 million',
      'Have a prior Citizens policy'
    ],
    correct: 1,
    explanation: 'Citizens is the insurer of last resort - applicants must show they cannot obtain comparable coverage from admitted carriers. Citizens policies may also be subject to rate comparisons with private market offers.',
    lessonId: 'citizens'
  },
  {
    id: 'rm003',
    topic: 'residual-markets',
    question: 'What is the Florida Automobile Joint Underwriting Association (FAJUA)?',
    options: [
      'A trade association',
      'A residual market for drivers who cannot obtain auto insurance',
      'A car dealership program',
      'A driver education organization'
    ],
    correct: 1,
    explanation: 'FAJUA is Florida\'s residual market for auto insurance, providing coverage to drivers who cannot obtain insurance in the voluntary market due to their driving record or other factors.',
    lessonId: 'fajua'
  },
  {
    id: 'rm004',
    topic: 'residual-markets',
    question: 'What is the Florida Workers Compensation Joint Underwriting Association (FWCJUA)?',
    options: [
      'A workers union',
      'A residual market for employers who cannot obtain workers compensation coverage',
      'A state workers compensation fund',
      'A federal program'
    ],
    correct: 1,
    explanation: 'The FWCJUA is Florida\'s residual market for workers compensation insurance, providing coverage to employers who cannot obtain coverage in the voluntary market.',
    lessonId: 'fwcjua'
  },
  {
    id: 'rm005',
    topic: 'residual-markets',
    question: 'If Citizens has a deficit due to hurricane losses, who ultimately pays?',
    options: [
      'Only Citizens policyholders',
      'The federal government',
      'All Florida property insurance policyholders through assessments',
      'Only insurers, not policyholders'
    ],
    correct: 2,
    explanation: 'Citizens can levy assessments on all property insurance policyholders in Florida if losses exceed reserves. This is a key reason Citizens is considered the "insurer of last resort."',
    lessonId: 'citizens'
  },

  // ============================================
  // MECHANICAL BREAKDOWN INSURANCE (2%) - ~5 questions
  // ============================================
  {
    id: 'mb001',
    topic: 'mechanical-breakdown',
    question: 'What is Mechanical Breakdown Insurance (MBI)?',
    options: [
      'Auto liability coverage',
      'Coverage for repair costs when vehicle mechanical systems fail',
      'Workers compensation for mechanics',
      'Garage liability insurance'
    ],
    correct: 1,
    explanation: 'MBI covers the cost of repairs when a vehicle\'s mechanical or electrical systems fail. It\'s similar to an extended warranty but is regulated as insurance.',
    lessonId: 'mbi'
  },
  {
    id: 'mb002',
    topic: 'mechanical-breakdown',
    question: 'How does MBI differ from a vehicle service contract (warranty)?',
    options: [
      'They are the same',
      'MBI is regulated as insurance; service contracts are not',
      'Service contracts are more comprehensive',
      'MBI only covers new cars'
    ],
    correct: 1,
    explanation: 'MBI is regulated as insurance and must comply with insurance laws. Vehicle service contracts are not regulated as insurance and are sold by dealers or manufacturers as warranty products.',
    lessonId: 'mbi'
  },
  {
    id: 'mb003',
    topic: 'mechanical-breakdown',
    question: 'MBI typically excludes:',
    options: [
      'Engine failure',
      'Routine maintenance like oil changes and brake pads',
      'Transmission repair',
      'Electrical system failure'
    ],
    correct: 1,
    explanation: 'MBI excludes routine maintenance items (oil, filters, brake pads, tires), pre-existing conditions, and damage from misuse, neglect, or lack of maintenance.',
    lessonId: 'mbi'
  },
  {
    id: 'mb004',
    topic: 'mechanical-breakdown',
    question: 'Who typically purchases Mechanical Breakdown Insurance?',
    options: [
      'Only commercial fleet operators',
      'Vehicle owners wanting protection against mechanical failures after factory warranty expires',
      'Only used car buyers',
      'Insurance companies'
    ],
    correct: 1,
    explanation: 'MBI is typically purchased by vehicle owners who want protection against costly mechanical repairs, especially after the manufacturer\'s warranty expires.',
    lessonId: 'mbi'
  },
  {
    id: 'mb005',
    topic: 'mechanical-breakdown',
    question: 'Is a license required to sell Mechanical Breakdown Insurance in Florida?',
    options: [
      'No license needed',
      'Yes, a property and casualty license is required',
      'Only a motor vehicle dealer license',
      'A federal license'
    ],
    correct: 1,
    explanation: 'Since MBI is regulated as insurance in Florida, agents must hold an appropriate property and casualty license to sell it.',
    lessonId: 'mbi'
  },

  // ============================================
  // ADDITIONAL FLORIDA STATUTES - CHAPTER 626/627
  // ============================================
  {
    id: 'fs050',
    topic: 'florida-statutes',
    question: 'Under Florida Statute 626.611, which of the following is a COMPULSORY ground for license revocation?',
    options: [
      'Failure to respond to an inquiry from the Department within 30 days',
      'Misappropriating or converting insurance premiums',
      'Being convicted of a misdemeanor not involving moral turpitude',
      'Having 3 customer complaints in one year'
    ],
    correct: 1,
    explanation: 'F.S. 626.611 lists COMPULSORY grounds for refusal, suspension, or revocation. Misappropriating, converting, or unlawfully withholding money is a compulsory ground requiring license action.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs051',
    topic: 'florida-statutes',
    question: 'Under Florida Statute 626.621, which grounds for license action are DISCRETIONARY?',
    options: [
      'Felony conviction',
      'Misappropriation of funds',
      'Demonstrated lack of fitness or trustworthiness',
      'Fraudulent insurance acts'
    ],
    correct: 2,
    explanation: 'F.S. 626.621 lists DISCRETIONARY grounds. "Demonstrated lack of fitness or trustworthiness" gives the Department discretion to take action. Compulsory grounds (626.611) REQUIRE action.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs052',
    topic: 'florida-statutes',
    question: 'How long does a licensed agent have to obtain an appointment after initial licensure in Florida?',
    options: [
      '24 months',
      '36 months',
      '48 months',
      '60 months'
    ],
    correct: 2,
    explanation: 'Under F.S. 626.371 and 626.381, a licensee has 48 months (4 years) to obtain an appointment. After 48 months without appointment, they must requalify as a first-time applicant.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs053',
    topic: 'florida-statutes',
    question: 'What is the late appointment fee in Florida if an appointment is submitted after the deadline?',
    options: [
      '$50',
      '$100',
      '$250',
      '$500'
    ],
    correct: 2,
    explanation: 'If an appointment is submitted late, the appointing entity must pay a $250 late fee in addition to the $60 statutory appointment fee.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs054',
    topic: 'florida-statutes',
    question: 'Under Florida law, how many days notice must an insurer give before canceling a binder?',
    options: [
      '3 days',
      '5 days',
      '10 days',
      '15 days'
    ],
    correct: 1,
    explanation: 'Under F.S. 627.728, an insurer must give 5 days prior notice of cancellation of a binder, unless the binder is replaced by a policy or another binder.',
    lessonId: 'florida-statutes'
  },
  {
    id: 'fs055',
    topic: 'florida-statutes',
    question: 'What is the purpose of F.S. Chapter 627 regarding insurance rates?',
    options: [
      'To maximize insurer profits',
      'To protect policyholders against excessive, inadequate, or unfairly discriminatory rates',
      'To set fixed rates for all insurance products',
      'To eliminate competition among insurers'
    ],
    correct: 1,
    explanation: 'Chapter 627 protects policyholders and the public against excessive, inadequate, or unfairly discriminatory insurance rates and authorizes the Office of Insurance Regulation to regulate such rates.',
    lessonId: 'florida-statutes'
  },
  {
    id: 'fs056',
    topic: 'florida-statutes',
    question: 'What does FIGA stand for in Florida insurance?',
    options: [
      'Florida Insurance Guaranty Association',
      'Florida Insurer General Authority',
      'Federal Insurance Governance Act',
      'Florida Independent Guaranty Agency'
    ],
    correct: 0,
    explanation: 'FIGA - Florida Insurance Guaranty Association - protects policyholders when property and casualty insurance companies become insolvent and cannot pay claims.',
    lessonId: 'residual-markets'
  },
  {
    id: 'fs057',
    topic: 'florida-statutes',
    question: 'Under Florida\'s No-Fault law, which coverages are REQUIRED for all vehicle owners?',
    options: [
      'Collision and comprehensive',
      'PIP and property damage liability',
      'Bodily injury liability and uninsured motorist',
      'Medical payments and rental reimbursement'
    ],
    correct: 1,
    explanation: 'Florida\'s No-Fault law requires Personal Injury Protection (PIP) and Property Damage Liability (PDL). Bodily injury liability is NOT required in Florida unless you cause an accident.',
    lessonId: 'florida-auto'
  },
  {
    id: 'fs058',
    topic: 'florida-statutes',
    question: 'What is the minimum PIP coverage required in Florida?',
    options: [
      '$5,000',
      '$10,000',
      '$25,000',
      '$50,000'
    ],
    correct: 1,
    explanation: 'Florida requires minimum PIP coverage of $10,000, which covers 80% of medical expenses and 60% of lost wages regardless of fault.',
    lessonId: 'florida-auto'
  },
  {
    id: 'fs059',
    topic: 'florida-statutes',
    question: 'What is Citizens Property Insurance Corporation?',
    options: [
      'A private insurance company',
      'Florida\'s state-created insurer of last resort for property insurance',
      'A federal insurance program',
      'A voluntary market insurance provider'
    ],
    correct: 1,
    explanation: 'Citizens Property Insurance Corporation is Florida\'s state-created, not-for-profit insurer of last resort, providing property insurance to those who cannot find coverage in the private market.',
    lessonId: 'residual-markets'
  },
  {
    id: 'al050',
    topic: 'agent-licensing',
    question: 'How many hours of pre-licensing education are required for a Florida 2-20 General Lines license?',
    options: [
      '40 hours',
      '60 hours',
      '200 hours',
      '400 hours'
    ],
    correct: 2,
    explanation: 'Florida requires 200 hours of coursework in property, casualty, surety, health, and marine insurance, including 3 hours of ethics education, before taking the 2-20 exam.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al051',
    topic: 'agent-licensing',
    question: 'What is the passing score required for the Florida 2-20 General Lines exam?',
    options: [
      '60%',
      '65%',
      '70%',
      '75%'
    ],
    correct: 2,
    explanation: 'The Florida 2-20 General Lines exam requires a minimum passing score of 70%.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al052',
    topic: 'agent-licensing',
    question: 'How many examination attempts are allowed within a one-year period in Florida?',
    options: [
      '3 attempts',
      '4 attempts',
      '5 attempts',
      'Unlimited attempts'
    ],
    correct: 2,
    explanation: 'You are limited to five examination attempts during a one-year period in Florida. After five failures, you must wait until the year passes to try again.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al053',
    topic: 'agent-licensing',
    question: 'What action must an agent take within 30 days of changing their residence address?',
    options: [
      'Nothing, the Department will be notified automatically',
      'Notify the Department of Financial Services in writing',
      'Obtain a new license',
      'Notify all appointing insurers only'
    ],
    correct: 1,
    explanation: 'Florida agents must notify the Department of Financial Services in writing within 30 days of any change in residence address.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al054',
    topic: 'agent-licensing',
    question: 'What is an "appointment" in Florida insurance licensing?',
    options: [
      'A meeting with the insurance commissioner',
      'Authority granted by an insurer to transact insurance on its behalf',
      'A policy application submission',
      'A customer consultation'
    ],
    correct: 1,
    explanation: 'An appointment is the authority given by an insurer or employer to a licensed agent to transact insurance or adjust claims on behalf of that company.',
    lessonId: 'licensing-requirements'
  },
  {
    id: 'al055',
    topic: 'agent-licensing',
    question: 'What is "rebating" in insurance?',
    options: [
      'Increasing premiums mid-term',
      'Returning a portion of premium or giving something of value as an inducement to purchase',
      'Denying a claim without investigation',
      'Canceling a policy without notice'
    ],
    correct: 1,
    explanation: 'Rebating is returning part of the premium or giving something of value as an inducement to purchase insurance. It is an illegal unfair trade practice in Florida.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'al056',
    topic: 'agent-licensing',
    question: 'Which is an example of "twisting" in insurance?',
    options: [
      'Recommending a policy replacement using misrepresentation',
      'Writing too many policies in one day',
      'Changing insurance companies',
      'Filing multiple claims'
    ],
    correct: 0,
    explanation: 'Twisting is inducing a policyholder to replace an existing policy through misrepresentation or incomplete comparison. It is an illegal unfair trade practice.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'tc050',
    topic: 'terms-concepts',
    question: 'What is the difference between "actual cash value" (ACV) and "replacement cost"?',
    options: [
      'ACV pays for new items; replacement cost deducts depreciation',
      'ACV deducts depreciation; replacement cost pays to replace with new items of like kind',
      'They are the same thing',
      'ACV only applies to vehicles'
    ],
    correct: 1,
    explanation: 'Actual Cash Value = Replacement Cost minus Depreciation. Replacement Cost pays to replace damaged property with new items of similar kind and quality without deducting for depreciation.',
    lessonId: 'loss-valuation'
  },
  {
    id: 'tc051',
    topic: 'terms-concepts',
    question: 'What does the 80% coinsurance clause require?',
    options: [
      'The insured pays 80% of all claims',
      'The property must be insured for at least 80% of its value to avoid a penalty',
      'The insurer pays 80% and the insured pays 20%',
      '80% of the premium must be paid upfront'
    ],
    correct: 1,
    explanation: 'The 80% coinsurance clause requires the policyholder to insure property for at least 80% of its replacement cost. If underinsured, the claim payment is reduced proportionally.',
    lessonId: 'coinsurance'
  },
  {
    id: 'tc052',
    topic: 'terms-concepts',
    question: 'What is "subrogation"?',
    options: [
      'The insurer\'s right to recover from a third party who caused the loss',
      'A type of insurance policy',
      'The insured\'s duty to pay premiums',
      'A method of calculating deductibles'
    ],
    correct: 0,
    explanation: 'Subrogation is the insurer\'s right to pursue recovery from a negligent third party after paying a claim. This prevents the insured from collecting twice and holds wrongdoers accountable.',
    lessonId: 'subrogation'
  },
  {
    id: 'tc053',
    topic: 'terms-concepts',
    question: 'What is the "elimination period" in a disability policy?',
    options: [
      'The period when coverage can be canceled',
      'The waiting period before benefits begin',
      'The time to file a claim',
      'The policy expiration date'
    ],
    correct: 1,
    explanation: 'The elimination period is the waiting period (deductible expressed in time) between when a disability begins and when benefits start. Common periods are 30, 60, 90, or 180 days.',
    lessonId: 'policy-provisions'
  },
  {
    id: 'pp050',
    topic: 'policy-provisions',
    question: 'What are the four essential elements of a valid insurance contract?',
    options: [
      'Premium, policy, insurer, insured',
      'Offer, acceptance, consideration, legal purpose',
      'Application, underwriting, binding, issuing',
      'Declarations, conditions, exclusions, endorsements'
    ],
    correct: 1,
    explanation: 'A valid insurance contract requires: 1) Offer and acceptance, 2) Consideration (premium exchange), 3) Competent parties, and 4) Legal purpose. These are standard contract law requirements.',
    lessonId: 'contract-law'
  },
  {
    id: 'pp051',
    topic: 'policy-provisions',
    question: 'What is an "aleatory contract"?',
    options: [
      'A contract where both parties exchange equal value',
      'A contract where one party may receive more value than given',
      'A contract that can be canceled anytime',
      'A contract requiring arbitration'
    ],
    correct: 1,
    explanation: 'Insurance contracts are aleatory - the amount exchanged may be unequal. The insured may pay premiums for years without a claim, or receive a large payout after one premium payment.',
    lessonId: 'contract-law'
  },
  {
    id: 'pp052',
    topic: 'policy-provisions',
    question: 'What does "utmost good faith" (uberrimae fidei) require?',
    options: [
      'Only the insurer must be honest',
      'Both parties must disclose all material facts honestly',
      'The agent must always recommend the cheapest policy',
      'Claims must be paid within 24 hours'
    ],
    correct: 1,
    explanation: 'Insurance contracts are contracts of utmost good faith - both the applicant and insurer must be completely honest and disclose all material facts. Concealment or misrepresentation can void coverage.',
    lessonId: 'contract-law'
  },
  {
    id: 'pp053',
    topic: 'policy-provisions',
    question: 'What is a "material misrepresentation"?',
    options: [
      'Any false statement on an application',
      'A false statement that would affect the insurer\'s decision to issue coverage or set premium',
      'Forgetting your middle name',
      'A typo in the address'
    ],
    correct: 1,
    explanation: 'A material misrepresentation is a false statement about a fact that would have influenced the insurer\'s decision to issue the policy, decline coverage, or charge a different premium.',
    lessonId: 'contract-law'
  },
  {
    id: 'pp054',
    topic: 'policy-provisions',
    question: 'What is the "duties after loss" provision?',
    options: [
      'The insurer\'s obligation to pay claims',
      'The insured\'s obligations to protect property, notify insurer, and cooperate',
      'The agent\'s requirement to file paperwork',
      'The underwriter\'s review process'
    ],
    correct: 1,
    explanation: 'Duties after loss require the insured to: give prompt notice, protect property from further damage, cooperate with investigation, provide documentation, and submit to examination under oath.',
    lessonId: 'policy-provisions'
  },
  {
    id: 'cp050',
    topic: 'casualty-policies',
    question: 'What does CGL stand for?',
    options: [
      'Commercial Guaranteed Liability',
      'Commercial General Liability',
      'Comprehensive General Loss',
      'Casualty General Limits'
    ],
    correct: 1,
    explanation: 'CGL stands for Commercial General Liability - the foundational liability policy for businesses covering bodily injury, property damage, personal injury, and advertising injury.',
    lessonId: 'cgl'
  },
  {
    id: 'cp051',
    topic: 'casualty-policies',
    question: 'What type of coverage does "products-completed operations" provide under CGL?',
    options: [
      'Coverage for theft of products',
      'Coverage for injury/damage caused by products after sale or work after completion',
      'Coverage for product recalls',
      'Coverage for manufacturing defects only'
    ],
    correct: 1,
    explanation: 'Products-completed operations coverage protects against liability for bodily injury or property damage caused by products after they leave your control or by completed work after you finish the job.',
    lessonId: 'cgl'
  },
  {
    id: 'cp052',
    topic: 'casualty-policies',
    question: 'What is the difference between "occurrence" and "claims-made" policies?',
    options: [
      'They are the same',
      'Occurrence covers claims when injury happens; claims-made covers claims when reported',
      'Occurrence is for property; claims-made is for liability',
      'Occurrence requires higher premiums'
    ],
    correct: 1,
    explanation: 'Occurrence policies cover injury/damage that OCCURS during the policy period, regardless of when claimed. Claims-made policies cover claims REPORTED during the policy period, regardless of when injury occurred.',
    lessonId: 'cgl'
  },
  {
    id: 'cp053',
    topic: 'casualty-policies',
    question: 'What is "umbrella liability" insurance?',
    options: [
      'Coverage for rain damage',
      'Excess liability coverage that sits above underlying policies',
      'Basic liability coverage',
      'Workers compensation insurance'
    ],
    correct: 1,
    explanation: 'Umbrella liability provides excess coverage above the limits of underlying policies (auto, homeowners, CGL). It also may cover some claims excluded by underlying policies.',
    lessonId: 'umbrella'
  },
  {
    id: 'mv050',
    topic: 'motor-vehicle',
    question: 'Under the Personal Auto Policy (PAP), what does Part A cover?',
    options: [
      'Collision damage',
      'Liability coverage',
      'Medical payments',
      'Uninsured motorist'
    ],
    correct: 1,
    explanation: 'PAP Part A is Liability Coverage - it pays for bodily injury and property damage the insured causes to others. This is typically the largest exposure for auto insurance.',
    lessonId: 'pap'
  },
  {
    id: 'mv051',
    topic: 'motor-vehicle',
    question: 'What is the difference between collision and comprehensive coverage?',
    options: [
      'They cover the same perils',
      'Collision covers accidents with objects; comprehensive covers theft, weather, vandalism',
      'Comprehensive covers collisions only',
      'Collision covers theft'
    ],
    correct: 1,
    explanation: 'Collision covers damage from hitting another vehicle or object. Comprehensive (other than collision) covers theft, vandalism, weather damage, fire, flood, hitting an animal, and falling objects.',
    lessonId: 'physical-damage'
  },
  {
    id: 'mv052',
    topic: 'motor-vehicle',
    question: 'What is "uninsured motorist" (UM) coverage?',
    options: [
      'Coverage if you don\'t have insurance',
      'Coverage that pays if you\'re injured by a driver who has no insurance',
      'Coverage for rental cars',
      'Coverage for commercial vehicles'
    ],
    correct: 1,
    explanation: 'Uninsured Motorist coverage pays for your injuries if you\'re hit by a driver who has no liability insurance or in a hit-and-run situation.',
    lessonId: 'um-uim'
  },
  {
    id: 'mv053',
    topic: 'motor-vehicle',
    question: 'What is "underinsured motorist" (UIM) coverage?',
    options: [
      'Coverage if your insurance limits are too low',
      'Coverage when the at-fault driver\'s insurance is insufficient to cover your damages',
      'Coverage for underage drivers',
      'Coverage for financed vehicles'
    ],
    correct: 1,
    explanation: 'Underinsured Motorist coverage pays the difference when the at-fault driver has insurance but their limits are not enough to cover all your damages.',
    lessonId: 'um-uim'
  },
  {
    id: 'rm050',
    topic: 'residual-markets',
    question: 'What is the Florida Automobile Joint Underwriting Association (FAJUA)?',
    options: [
      'A private insurance company',
      'A residual market mechanism for drivers who cannot obtain auto insurance in voluntary market',
      'A federal auto insurance program',
      'An agent licensing organization'
    ],
    correct: 1,
    explanation: 'FAJUA is Florida\'s residual market for auto insurance, providing coverage to drivers who cannot find insurance in the voluntary market due to high risk.',
    lessonId: 'residual-markets'
  },
  {
    id: 'rm051',
    topic: 'residual-markets',
    question: 'What is the Florida Workers Compensation Joint Underwriting Association (FWCJUA)?',
    options: [
      'A private workers comp insurer',
      'The residual market for employers who cannot obtain workers comp in the voluntary market',
      'A union organization',
      'A federal workers comp program'
    ],
    correct: 1,
    explanation: 'FWCJUA provides workers compensation insurance to Florida employers who cannot find coverage in the voluntary market. It ensures all employers can meet their workers comp requirements.',
    lessonId: 'residual-markets'
  },
  {
    id: 'fs060',
    topic: 'florida-statutes',
    question: 'What is the statutory appointment fee in Florida?',
    options: [
      '$40',
      '$50',
      '$60',
      '$75'
    ],
    correct: 2,
    explanation: 'The statutory appointment fee in Florida is $60. If submitted late, an additional $250 late fee applies.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs061',
    topic: 'florida-statutes',
    question: 'Under F.S. 626.611, conviction of a felony is what type of ground for license action?',
    options: [
      'Discretionary',
      'Compulsory',
      'Not grounds for action',
      'Only if insurance-related'
    ],
    correct: 1,
    explanation: 'Conviction of a felony is a COMPULSORY ground under 626.611. The Department MUST refuse, suspend, or revoke the license - there is no discretion.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'fs062',
    topic: 'florida-statutes',
    question: 'How much continuing education must a licensed agent complete each renewal period?',
    options: [
      '12 hours',
      '20 hours',
      '24 hours',
      '40 hours'
    ],
    correct: 2,
    explanation: 'Florida agents must complete 24 hours of continuing education each 2-year license renewal period, including required ethics and update hours.',
    lessonId: 'florida-licensing'
  },
  {
    id: 'tc054',
    topic: 'terms-concepts',
    question: 'What is "adverse selection"?',
    options: [
      'When insurers select only good risks',
      'The tendency of high-risk individuals to seek more insurance',
      'When agents select adverse clients',
      'A method of policy cancellation'
    ],
    correct: 1,
    explanation: 'Adverse selection is the tendency of people with higher-than-average risk to buy more insurance. This is why underwriting is important - to identify and properly price risks.',
    lessonId: 'underwriting'
  },
  {
    id: 'tc055',
    topic: 'terms-concepts',
    question: 'What is "moral hazard"?',
    options: [
      'The risk of fire damage',
      'Increased risk due to character defects like dishonesty or carelessness',
      'The risk of natural disasters',
      'A type of deductible'
    ],
    correct: 1,
    explanation: 'Moral hazard is increased risk arising from character defects or past dishonest behavior of the insured that may increase the likelihood of a loss or fraudulent claim.',
    lessonId: 'underwriting'
  },
  {
    id: 'tc056',
    topic: 'terms-concepts',
    question: 'What is "morale hazard"?',
    options: [
      'Intentional destruction of property',
      'Carelessness or indifference to loss because insurance exists',
      'Emotional distress claims',
      'Employee theft'
    ],
    correct: 1,
    explanation: 'Morale hazard is carelessness or indifference about protecting property because the person knows insurance will pay. Unlike moral hazard, there\'s no intent to cause a loss.',
    lessonId: 'underwriting'
  }
];

// Get questions by topic
export function getQuestionsByTopic(topicId) {
  return questions.filter(q => q.topic === topicId);
}

// Get random questions for practice exam
export function getExamQuestions(count = 100) {
  const topicWeights = {
    'terms-concepts': 28,
    'policy-provisions': 24,
    'casualty-policies': 15,
    'motor-vehicle': 15,
    'florida-statutes': 11,
    'agent-licensing': 8,
    'residual-markets': 2,
    'mechanical-breakdown': 2
  };

  let examQuestions = [];

  Object.entries(topicWeights).forEach(([topic, weight]) => {
    const topicQuestions = questions.filter(q => q.topic === topic);
    const numToSelect = Math.round((weight / 100) * count);
    const shuffled = [...topicQuestions].sort(() => Math.random() - 0.5);
    examQuestions.push(...shuffled.slice(0, numToSelect));
  });

  // Shuffle final exam and trim to exact count
  return examQuestions.sort(() => Math.random() - 0.5).slice(0, count);
}

// Get question count by topic
export function getQuestionCounts() {
  const counts = {};
  Object.keys(TOPICS).forEach(topic => {
    counts[topic] = questions.filter(q => q.topic === topic).length;
  });
  return counts;
}
