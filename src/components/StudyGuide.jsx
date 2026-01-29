function StudyGuide({ onTopicSelect, onStartExam }) {
  return (
    <div className="study-guide-container">
      <div className="progress-header">
        <h1>Study Guide</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Your complete 4-week plan to pass the Florida 2-20 exam
        </p>
      </div>

      {/* Quick Start */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--primary)', color: 'white' }}>
        <h3 style={{ marginBottom: '1rem' }}>How to Use This App</h3>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Click a <strong>topic</strong> on the Dashboard to start a quiz</li>
          <li>When you get a question <strong>wrong</strong>, click "Study This Topic"</li>
          <li><strong>Read the lesson</strong> - this is where you learn</li>
          <li><strong>Quiz again</strong> until you reach 75%+ mastery</li>
          <li>Take <strong>Practice Exams</strong> to build stamina</li>
        </ol>
      </div>

      {/* Week by Week */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>4-Week Study Plan</h3>

        {/* Week 1 */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Week 1: Foundations</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Focus:</strong> Terms & Concepts + Policy Provisions</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Learn insurable interest, indemnity, perils vs hazards, coinsurance formula,
              contract elements, policy structure. Take first practice exam on Day 7.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('terms-concepts')}>
                Start Terms & Concepts
              </button>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('policy-provisions')}>
                Start Policy Provisions
              </button>
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Week 2: Casualty & Auto</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Focus:</strong> Casualty Policies + Motor Vehicle</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Learn CGL coverages (A, B, C), Workers Comp, surety bonds, PAP parts (A, B, C, D),
              Florida PIP requirements (14-day rule!). Practice exam on Day 14.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('casualty-policies')}>
                Start Casualty Policies
              </button>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('motor-vehicle')}>
                Start Motor Vehicle
              </button>
            </div>
          </div>
        </div>

        {/* Week 3 */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Week 3: Florida Law</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Focus:</strong> Florida Statutes + Agent Licensing + Residual Markets</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Learn Chapter 626 (626.611 vs 626.621), prohibited practices, agent authority,
              Citizens, FIGA, MBI. Practice exam on Day 21.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('florida-statutes')}>
                Start Florida Statutes
              </button>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => onTopicSelect('agent-licensing')}>
                Start Agent Licensing
              </button>
            </div>
          </div>
        </div>

        {/* Week 4 */}
        <div>
          <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Week 4: Mastery</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Focus:</strong> Practice exams + weak areas</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Drill any topic below 75% mastery. Take 3-4 full practice exams.
              Goal: Score 80%+ consistently before the real exam.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={onStartExam}>
                Start Practice Exam
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers to Memorize */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Numbers You MUST Memorize</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>48 months</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Time to get appointed after licensure</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>14 days</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PIP treatment deadline (critical!)</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>$10,000</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PIP coverage minimum</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>80% / 60%</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PIP medical / lost wages</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>$300,000</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>FIGA maximum payout</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>24 hours</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CE every 2 years (4 hr ethics)</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>5 days</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Report address change</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--primary-light)' }}>70%</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Passing score (aim for 80%+)</div>
          </div>
        </div>
      </div>

      {/* Key Formulas */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Formulas to Know</h3>
        <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Coinsurance Formula</h4>
          <code style={{
            display: 'block',
            backgroundColor: 'var(--bg-card)',
            padding: '1rem',
            borderRadius: '4px',
            fontFamily: 'monospace',
            marginBottom: '1rem'
          }}>
            Payment = (Amount Carried / Amount Required) × Loss
          </code>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <strong>Example:</strong> Building worth $500K, 80% coinsurance, carry $300K, loss $100K<br/>
            Required: $500K × 80% = $400K<br/>
            Payment: ($300K / $400K) × $100K = <strong>$75,000</strong>
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1.5rem', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Actual Cash Value</h4>
          <code style={{
            display: 'block',
            backgroundColor: 'var(--bg-card)',
            padding: '1rem',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>
            ACV = Replacement Cost − Depreciation
          </code>
        </div>
      </div>

      {/* Critical Distinctions */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Critical Distinctions</h3>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>626.611 vs 626.621</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)' }}>626.611 - COMPULSORY</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                DFR MUST take action: fraud, misappropriation, felony, willful violations
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
              <strong style={{ color: 'var(--warning)' }}>626.621 - DISCRETIONARY</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                DFR MAY take action: incompetence, CE violations, misdemeanors
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Prohibited Practices</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>Twisting:</strong> Misrepresenting to get policy replacement</p>
            <p><strong>Churning:</strong> Excessive replacements for commission</p>
            <p><strong>Rebating:</strong> Giving value not specified in policy</p>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '0.5rem' }}>Contract Characteristics</h4>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>Aleatory:</strong> Unequal exchange based on chance</p>
            <p><strong>Unilateral:</strong> Only insurer makes enforceable promise</p>
            <p><strong>Conditional:</strong> Insurer pays IF conditions met</p>
            <p><strong>Adhesion:</strong> Take it or leave it (ambiguities favor insured)</p>
          </div>
        </div>
      </div>

      {/* Exam Day Tips */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>Exam Day Strategy</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Before</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
              <li>Arrive 30 min early</li>
              <li>Bring valid ID</li>
              <li>Light breakfast (protein)</li>
              <li>No last-minute cramming</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>During</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
              <li>First pass: answer known questions</li>
              <li>Flag uncertain ones</li>
              <li>Second pass: work flagged</li>
              <li>Trust first instinct</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Question Tips</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
              <li>Absolutes ("always") usually wrong</li>
              <li>Qualifiers ("usually") often correct</li>
              <li>Eliminate obvious wrong answers</li>
              <li>Read entire question first</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyGuide;
